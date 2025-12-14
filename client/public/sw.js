// Service Worker for caching static assets
const CACHE_NAME = 'growithcp-v1.0.0';
const STATIC_CACHE = 'growithcp-static-v1.0.0';
const DYNAMIC_CACHE = 'growithcp-dynamic-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip caching for API calls, external resources, and non-GET requests
  if (
    request.method !== 'GET' ||
    url.protocol !== 'https:' ||
    url.hostname !== location.hostname ||
    url.pathname.startsWith('/api/') ||
    url.pathname.includes('chrome-extension') ||
    url.pathname.includes('favicon')
  ) {
    return;
  }

  // Cache-first strategy for static assets
  if (
    url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/) ||
    url.pathname.includes('/assets/')
  ) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(request)
            .then((response) => {
              // Cache successful responses
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(STATIC_CACHE)
                  .then((cache) => cache.put(request, responseClone));
              }
              return response;
            })
            .catch(() => {
              // Return offline fallback if available
              return caches.match('/offline.html');
            });
        })
    );
  } else {
    // Network-first strategy for HTML pages
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful HTML responses
          if (response.status === 200 && request.headers.get('accept').includes('text/html')) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Try cache for offline fallback
          return caches.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Return cached homepage as fallback
              return caches.match('/');
            });
        })
    );
  }
});

// Handle background sync for contact forms (if implemented later)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync-contact') {
    event.waitUntil(syncContactForm());
  }
});

// Background sync function (placeholder)
function syncContactForm() {
  // Implement background sync for contact forms if needed
  return Promise.resolve();
}
