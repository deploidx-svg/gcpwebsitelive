# GrowithCP Design Guidelines

## Design Approach
**Reference-Based Premium Agency**: Drawing inspiration from high-end agency websites with a unique dark glassmorphism aesthetic. This is a premium, conversion-focused multi-page website emphasizing trust, speed, and elite service.

## Core Design Elements

### Typography
- **Font Family**: Inter, Satoshi, or Plus Jakarta Sans (modern sans-serif via Google Fonts)
- **Hierarchy**:
  - Hero Headlines: 4xl-6xl, bold (700-800 weight)
  - Section Headings: 2xl-4xl, bold
  - Body Text: base-lg, regular (400-500 weight), high readability
  - CTA Text: lg-xl, semibold

### Color Palette & Visual Treatment
- **Background**: Matte black base (#0a0a0a to #000000)
- **Accent Colors**: Deep maroon → crimson → wine gradients
- **Glassmorphism**: Applied to all cards, navbar, buttons
  - Backdrop blur: blur-xl to blur-2xl
  - Background opacity: 5-15%
  - Border: 1px solid white/maroon at 10-20% opacity
  - Subtle shadow and glow effects
- **Glow Accents**: 5-10% opacity maroon/crimson glows on hover and key elements
- **Background Animation**: Slow-moving liquid maroon gradients with light glass noise texture overlay

### Layout System
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, py-12, gap-8, etc.)
- **Container**: max-w-7xl for content sections
- **Section Padding**: py-20 to py-32 on desktop, py-12 to py-16 on mobile
- **Multi-column**: Use strategically for cards (2-3 columns on desktop, stack on mobile)

### Component Library

**Navigation**
- Sticky glass navbar at top
- Logo on left (provided GrowithCP logo with red rocket)
- Navigation links: Home, Services, Pricing, About, Contact
- Primary CTA button in navbar
- Mobile hamburger menu
- Glassmorphism styling with backdrop blur

**Hero Section**
- Centered layout with large bold headline: "AI-Powered Websites. Delivered the Same Day."
- Subtext below headline
- Primary CTA: "Talk to AI Website Consultant" (glass maroon button linking to https://betaai.growithcp.live/)
- Secondary CTA: "View Services"
- Subtle floating animation on headline
- Gradient glow behind text
- No large hero image - focus on typography and gradient background

**Glass Cards**
- Used throughout for: Why GrowithCP features, Services, Pricing, How It Works steps
- Glassmorphism effect with backdrop blur
- Soft maroon glow on hover
- Slight lift animation on hover (translate-y)
- Icon/emoji + heading + description format

**Buttons**
- Primary: Glass maroon button with glow
- Implement backdrop blur for buttons on any background
- NO custom hover/active states - let Button component handle interactions
- Sizes: base for inline CTAs, lg-xl for hero/primary actions

**Page-Specific Sections**
- **Why GrowithCP**: 3 glass cards in grid (Same-Day Delivery, Affordable Pricing, AI-Powered Engineering)
- **How It Works**: Horizontal step layout with 4 steps, glass styling
- **Services Page**: Grid of glass cards (Business, Portfolio, E-Commerce, Landing Pages, Hosting)
- **Pricing Page**: 4 pricing tier cards (Starter, Business, E-Commerce, Custom) with "cheapest in market" and "same-day delivery" highlights
- **About Page**: Clear messaging that clients don't use AI, engineers do everything
- **Contact Page**: Centered CTA section with prominent AI consultant link

### Animations
- Subtle floating effects on hero elements
- Glass shimmer every 10-12 seconds
- Hover lift animations on cards
- Smooth page transitions
- Fade + slide scroll animations
- Minimal, premium - no heavy or distracting animations

### Images
- **Logo**: GrowithCP logo with red rocket icon in navbar
- **No hero image**: Typography and gradient-focused hero
- **Optional**: Subtle abstract shapes or AI-themed illustrations as accents (not required)

### Mobile Responsiveness
- Mobile-first approach
- Stack all multi-column layouts to single column
- Adjust typography scale for mobile (smaller hero text)
- Ensure glassmorphism remains performant
- Touch-friendly button sizes

### Performance & Polish
- Fast initial load
- Lightweight animations
- Optimized for conversion
- Smooth transitions between pages
- Professional, expensive, futuristic feel: "Damn, this brand knows what it's doing"