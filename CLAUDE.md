# Tripile Project Rules

## Stack
Next.js 14 App Router, TypeScript, Tailwind CSS, MongoDB with Mongoose, NextAuth.js, Stripe, Amadeus API, Resend for emails.

## Design
- Full design spec is in tripile-design-spec.md read it before building any UI component
- Colors, fonts, spacing, and radius all come from CSS variables in globals.css
- No hardcoded hex values in any component only Tailwind classes or var() references
- No gradients, no neon, no shadows except functional ones
- Minimum 16px font size everywhere in the UI
- No em dashes or en dashes in any UI copy

## Components
- Every result card (flight or hotel) must have both a "Book now" button and a "Call us" button
- Phone number must be visible on every page
- Button variants: primary (bg-primary, white text), ghost (border-primary, primary text), phone (primary bg + phone icon)

## Rules
- Do not install any npm package without telling me first
- Do not modify unrelated files when fixing a bug
- Run npm run dev after each phase to verify no errors before moving on
