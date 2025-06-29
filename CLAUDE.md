# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Opponiti is a Next.js application designed to combat telemarketing abuse in Italy through a dual-track approach:
- **For End Users**: €1 signup bonus + referral rewards + collective legal action participation
- **For Companies**: Certification system with green checkmark for legitimate businesses
- **Revolutionary Marketing**: Pay users directly instead of spending on traditional advertising

## Development Commands

**Package Manager**: This project uses `pnpm` as the package manager.

```bash
# Development server with Turbopack (recommended)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## Architecture

**Framework**: Next.js 15.3.4 with App Router
**UI Library**: shadcn/ui with Radix UI primitives
**Styling**: Tailwind CSS v4 with PostCSS
**Animations**: Framer Motion for smooth interactions
**Language**: TypeScript with strict mode enabled
**Theme**: Dark-first design with glass morphism effects

**Key Dependencies**:
- `@radix-ui/*` - Accessible UI primitives
- `framer-motion` - Advanced animations
- `lucide-react` - Modern icon library
- `class-variance-authority` - Component variants
- `tailwind-merge` - Conditional styling

**Project Structure**:
```
src/
├── app/
│   ├── page.tsx           # Homepage (end users)
│   ├── aziende/page.tsx   # Business certification page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/ui/         # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── badge.tsx
└── lib/
    └── utils.ts           # Utility functions
```

## Design System

**Theme**: Dark-first with neon accents
**Colors**: 
- Primary: Red gradients (brand)
- Success: Emerald (certifications, money)
- Info: Blue (business features)
- Warning: Yellow (alerts)
- Error: Red (problems)

**Components**: Built with shadcn/ui for consistency
**Animations**: Scroll-triggered, hover effects, and micro-interactions
**Typography**: Gradient text effects for emphasis

## Key Features Implemented

### Homepage (/) - End User Focus
- Hero section with €1 signup incentive
- Problem statement with statistics
- Solution explanation with 3-step process
- Revolutionary marketing comparison
- User survey for market validation
- App download section with early bird bonus

### Business Page (/aziende) - Company Focus  
- Professional design with business badge
- Certification benefits and ROI metrics
- Three pricing tiers (Starter/Professional/Enterprise)
- Demo request form with detailed fields
- B2B focused messaging and testimonials

### Shared Features
- Dark theme with animated backgrounds
- Glass morphism effects and backdrop blur
- Responsive design (mobile-first)
- Cross-linking between user and business flows
- Performance optimized with Turbopack

## Business Model Context

**User Acquisition**: €1 signup bonus instead of traditional advertising
**Revenue Streams**: 
- Company certifications (€99-799/month)
- Legal action revenue sharing
- API licensing and partnerships

**Value Proposition**:
- Users get paid to use the app (revolutionary)
- Companies get verified legitimacy 
- Both get protection from telemarketing abuse

## Development Notes

- Focus on conversion optimization for both audiences
- Implement proper form handling for lead collection
- Prepare for mobile app integration
- Consider A/B testing different incentive amounts
- Build with scalability in mind for rapid user growth