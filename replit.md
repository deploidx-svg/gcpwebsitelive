# GrowithCP - AI-Powered Web Design Agency

## Overview

GrowithCP is a premium, conversion-focused web design agency website built with a modern React + Express full-stack architecture. The platform showcases AI-powered website development services with a distinctive dark glassmorphism aesthetic featuring matte black backgrounds and deep maroon accent gradients.

The core business model is a done-for-you service where clients share requirements and engineers build everything using AI internally for speed, affordability, and same-day delivery. Key offerings include business websites, portfolio sites, e-commerce solutions, and landing pages with tiered pricing plans (Demo, Starter, Growth, Pro Business, and Elite AI).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting dark mode by default
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions with mobile performance optimizations
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **API Design**: RESTful endpoints prefixed with `/api`
- **Build System**: esbuild for server bundling, Vite for client bundling
- **Development**: tsx for TypeScript execution in development mode

### Data Storage
- **Database**: PostgreSQL via Supabase
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Migrations**: Managed via drizzle-kit with migrations stored in `/migrations`

### Code Organization
- **Client code**: `client/src/` with pages, components, hooks, and lib directories
- **Server code**: `server/` with routes, storage interface, and static file serving
- **Shared code**: `shared/` for database schemas and types used by both client and server
- **Design assets**: `attached_assets/` for brand guidelines and reference materials

### Performance Optimizations
- Service worker for caching static assets
- Lazy loading for all page components and heavy UI elements
- Mobile-specific animation reduction for better performance
- Chunk splitting for vendor, UI, animation, router, and query libraries

## External Dependencies

### Database
- **PostgreSQL**: Primary database hosted on Supabase
- **Connection**: Via `DATABASE_URL` environment variable

### Third-Party Services
- **Supabase**: Database hosting and management
- **Google Fonts**: Inter and Plus Jakarta Sans font families

### Key NPM Packages
- **UI**: Full Radix UI component suite, Lucide React icons, class-variance-authority
- **Forms**: React Hook Form with zod resolvers
- **Data**: TanStack React Query, drizzle-orm, drizzle-zod
- **Animation**: Framer Motion, Embla Carousel
- **Utilities**: date-fns, clsx, tailwind-merge

### External Links
- AI Consultant: https://betaai.growithcp.live/
- Client Portal: https://clients.growithcp.live/