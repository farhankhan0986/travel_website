# Tripile Design Specification

> US-focused travel booking for the 50+ traveler. Phone-first. Premium. Cinematic.

---

## 1. Design Philosophy

The four references share one thing: **the photography is the product**. No UI chrome competes with the image. Type sits on top of it large, confident, and minimal. The search form floats at the bottom edge like a caption, not a form.

Tripile takes the same stance but adds warmth and trust signals that work for a 50+ American audience. The editorial grandeur of the references, filtered through the authority of a burgundy-and-ivory palette and a serif that reads like a luxury print magazine.

The one rule above all: **if a UI element feels like a travel booking website, remove it or make it half the size.**

---

## 2. Color Tokens

```
--color-burg-deep:    #5C1828   /* primary brand, nav CTAs, active states */
--color-burg-mid:     #8B2A3F   /* hover states, secondary actions */
--color-burg-pale:    #F5EAED   /* light backgrounds, pill backgrounds */
--color-ivory:        #FAF7F2   /* page background, card fill */
--color-cream:        #EDE0CC   /* dividers, input borders */
--color-warm-dark:    #1A0F0D   /* primary text */
--color-warm-mid:     #6B5244   /* secondary text, labels */
--color-warm-light:   #A89282   /* captions, placeholders */
--color-gold-accent:  #C9A84C   /* italic headlines, star ratings, premium signals */
--color-white-glass:  rgba(255,255,255,0.92)  /* nav, search box backgrounds */
--color-dark-scrim:   rgba(15,6,4,0.40)       /* hero video overlay */
```

**Rule:** No color not in this list appears in the UI. Not even one.

---

## 3. Typography

### Typefaces

| Role | Family | Source |
|------|--------|--------|
| Display / hero headline | **Cormorant Garamond** | Google Fonts |
| Body + UI labels | **DM Sans** | Google Fonts |
| Numeric data (stats, prices) | **Cormorant Garamond** | Google Fonts (same family, tabular figures) |

### Why these

Cormorant Garamond has the same editorial weight as Playfair Display (reference 3) but is narrower and more refined at large sizes. It supports the italic that makes the hero headline feel alive. DM Sans is geometric but has warmth it avoids the coldness of Inter while staying fully legible at 14px+ for older eyes.

### Type scale

```
--text-hero:       96px / line-height 0.95 / tracking -0.02em / weight 600
--text-hero-sm:    64px / line-height 1.0  / tracking -0.01em / weight 600
--text-section:    52px / line-height 1.1  / tracking -0.01em / weight 500
--text-card-title: 22px / line-height 1.25 / tracking 0        / weight 600
--text-body-lg:    18px / line-height 1.65 / tracking 0        / weight 400
--text-body:       16px / line-height 1.65 / tracking 0        / weight 400
--text-label:      12px / line-height 1.4  / tracking 0.10em   / weight 500
--text-caption:    13px / line-height 1.5  / tracking 0.02em   / weight 400
```

**Rule:** All display type (Cormorant Garamond) is set at the scale above with no exceptions. No mid-size decorative headings at 28px that look like H2 tags from a template.

---

## 4. Hero Section

### Structure

```
┌──────────────────────────────────────────────────────────────┐
│ NAV: Logo (left) ........ Flights · Hotels · About · Sign In │
│      .............................................. [Call Us] │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  FULL-BLEED VIDEO (plane in blue sky, or hotel dusk scene)   │
│                      + dark scrim overlay                    │
│                                                              │
│  EYEBROW TEXT (small, white, uppercase, tracked)             │
│                                                              │
│  Travel the world with                                       │
│  confidence.          ← HERO H1 (Cormorant, 96px, white)    │
│                                                              │
│  [Real agents. Available by phone. No hidden fees.]          │
│               ← sub copy (DM Sans 18px, white 80%)           │
│                                                              │
│                                                              │
│  150K+ Guests ·  ·  22 Years ·  ·  BBB A+                   │
│         ← stat row bottom-left, white, small                 │
│                                                              │
│ ┌────────────────────────────────────────────────────┐       │
│ │  [Flights] [Hotels]  │  From  │  To  │  Date  │ ◉ │       │
│ └────────────────────────────────────────────────────┘       │
└──────────────────────────────────────────────────────────────┘
```

### Video behavior

- Two `<video>` elements stacked absolutely with `transition: opacity 0.45s ease`.
- Flights default: plane banking through clear blue sky, shot from below.
- Hotels: warm hotel pool at golden hour, slight motion.
- Tab switch triggers opacity crossfade. No hard cut.
- Both autoplay, muted, loop. `preload="metadata"` on the non-active one.
- Source: Pexels or Coverr (free, commercially licensed).

### Nav

- Transparent on hero, transitions to `--color-white-glass` with a `1px solid --color-cream` bottom border on scroll.
- Logo: `Cormorant Garamond 600`, burgundy.
- Nav links: `DM Sans 14px`, `--color-warm-dark`, 0.75 opacity, 1.0 on hover.
- Call Us button: `--color-burg-deep` background, white text, `DM Sans 500 13px`, 38px height, 16px horizontal padding, 6px radius. Phone icon left.

### Hero headline

- Cormorant Garamond, 96px, `font-weight: 600`, white, `letter-spacing: -0.02em`.
- Line 2 or key word in `font-style: italic` and `color: --color-gold-accent`.
- Example: "Travel the world with *confidence.*"
- Positioned left-aligned, 80px from left edge on desktop.

### Eyebrow

- `DM Sans`, `--text-label` scale, `color: rgba(255,255,255,0.60)`, uppercase, `letter-spacing: 0.12em`.
- Content: "Trusted by 150,000 American travelers" or similar trust signal.
- 28px margin below eyebrow before H1.

### Stat row

- Bottom-left of hero, above the search box, `20px` above search box top edge.
- Three stats separated by a `·` dot at 50% opacity.
- Each stat: number in Cormorant Garamond 500 20px white, label in DM Sans 12px white 60%.
- No icons. No cards. Just inline text.

### Search box

- Position: `absolute bottom-0`, centered horizontally, extends 48px below hero bottom edge into the ivory page area below.
- Background: `--color-white-glass`, `border-radius: 16px`, `box-shadow: 0 4px 32px rgba(15,6,4,0.14)`.
- Tab row (Flights / Hotels): pill switcher inside the box, top edge. Active tab: `--color-burg-deep` background, white text.
- Fields: `DM Sans 15px`, `--color-warm-dark`. Labels: `--text-label`, `--color-warm-mid`. No visible borders between fields, only a `1px solid --color-cream` right separator.
- Search button: `--color-burg-deep`, circular (52px diameter) or wide pill, icon + "Search".

---

## 5. Phone CTA Strip

Immediately below hero, full width:

```
┌──────────────────────────────────────────────────────────────┐
│  Prefer to talk?  ·  1-800-TRIPILE  ·  Mon-Sat, 8am-9pm EST │
└──────────────────────────────────────────────────────────────┘
```

- Background: `--color-burg-deep`.
- Text: white, `DM Sans 14px`. Phone number: `Cormorant Garamond 500 20px`.
- This is non-negotiable UI. It cannot be dismissed or hidden.

---

## 6. Trust Strip

Below phone bar, above first content section:

- Background: `--color-ivory`, `border-bottom: 1px solid --color-cream`.
- Four items in a centered row: BBB A+, 150K+ Travelers, Real Agents, Secure SSL.
- Icon: `--color-burg-deep`, 18px Lucide icon.
- Label: `DM Sans 12px`, `--color-warm-mid`. Bold value: `DM Sans 500`, `--color-warm-dark`.

---

## 7. Results Cards (Flights and Hotels)

### Layout

```
┌─────────────────────────────────────────────────────┐
│  Airline name      7:30 AM ──── Nonstop ──── 10:40  │
│  (small, muted)    JFK              3h 10m       MIA │
│                    Economy · 1 bag included          │
│                                         $189 /person │
│                                   [Call us] [Book now]│
└─────────────────────────────────────────────────────┘
```

### Styling rules

- Background: white. Border: `1px solid --color-cream`. Radius: `14px`. Padding: `20px 24px`.
- Hover state: `border-color: --color-burg-mid`. Transition 200ms.
- Price: Cormorant Garamond, `--text-card-title` scale, `--color-burg-deep`.
- "Call us" button: ghost style, `border: 1px solid --color-burg-deep`, `color: --color-burg-deep`, `DM Sans 500 13px`.
- "Book now" button: solid `--color-burg-deep`, white text, `DM Sans 500 13px`.
- Both buttons: `border-radius: 7px`, `height: 36px`, `padding: 0 16px`.
- **Both buttons are equal prominence.** Call us is not an afterthought.

### Font sizes

All text in cards uses DM Sans at minimum 15px for body, 13px for labels. No 11px text. The 50+ audience needs it.

---

## 8. Spacing System

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   20px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
--space-24:  96px
```

Section vertical rhythm: `--space-20` (80px) between major page sections.

---

## 9. Page Sections (Homepage)

In order, top to bottom:

| # | Section | Notes |
|---|---------|-------|
| 1 | Nav | Transparent over hero |
| 2 | Hero (video + overlay + headline + stats + search) | 100vh |
| 3 | Phone CTA strip | Always visible |
| 4 | Trust strip | Icons + 4 stats |
| 5 | How it works | 3 steps: Search, Call/Book, Fly. No numbered icons illustrated inline. |
| 6 | Popular destinations | 4-column card grid, real photography |
| 7 | Why Tripile | Left: editorial copy. Right: agent photo. No bullet lists. |
| 8 | Testimonials | 3 cards, real names, real ages ("Margaret, 67, Phoenix"). No star inflation show honest 4-5 star range. |
| 9 | Second phone CTA | Large centered: "Prefer to speak with someone?" + number + hours |
| 10 | Footer | Logo, nav links, phone, hours, legal |

---

## 10. Animation Rules

### What moves

- Hero video: ambient, always running.
- Nav background: opacity transition on scroll (0ms delay, 300ms duration).
- Video crossfade: 450ms on tab switch.
- Cards: `border-color` on hover, 200ms ease.
- Search box fields: `border-color` on focus, 150ms ease.

### What does not move

- No scroll-triggered text reveals.
- No parallax.
- No page transition animations.
- No floating elements.
- No pulse, bounce, or spin effects anywhere.

**Rule:** `@media (prefers-reduced-motion: reduce)` disables all transitions. Video pauses.

---

## 11. Spacing and Layout Grid

- Max content width: `1280px`, centered.
- Page horizontal padding: `80px` desktop, `24px` mobile.
- Column grid: 12 columns, `24px` gutters.
- Hero is always full-bleed (100vw, 100vh). Never constrained.

---

## 12. Component: Destination Card

```
┌──────────────────────┐
│                      │
│  [photography, 3:2]  │
│                      │
├──────────────────────┤
│  Miami, Florida      │  ← Cormorant Garamond 500, 20px
│  Flights from $189   │  ← DM Sans 13px, --color-warm-mid
│  [Explore →]         │  ← DM Sans 500 13px, --color-burg-deep
└──────────────────────┘
```

- Radius: `12px` on image top, `0` on card bottom (image bleeds to card edges).
- Image hover: `scale(1.03)` with `overflow:hidden` + `transition: transform 400ms ease`.
- No drop shadows. Border: `1px solid --color-cream`.

---

## 13. What This Design Is Not

To keep Tripile from drifting into AI-slop territory:

- **No navy blue.** Every other "trusted" travel site is navy. Burgundy is the differentiator.
- **No circular avatar icons next to testimonials.** Use names, ages, cities. That is more trustworthy.
- **No animated counters** (numbers ticking up on scroll). Static stats are cleaner.
- **No hero text that says "Discover Your Next Adventure."** Every travel site says this.
- **No card grids with equal-height rows at 320px that look like a Figma component library.**
- **No chatbot bubble.** The whole point is that the phone number replaces the chatbot.

---

## 14. Signature Element

The single element that makes Tripile memorable:

**The search box sits half inside the hero and half below it** anchored to the hero bottom edge, protruding 48px into the ivory section below. This creates a physical overlap between the cinematic world of the video and the functional world of booking. It references the Iceland reference (image 4) directly but works in Tripile's warmer, more trustworthy palette.

On video tab switch, the search form's tab indicator slides with a `transform` animation (not a color swap) so the user physically sees the context change.

---

## 15. File and Token Organization (Next.js)

```
/styles
  globals.css          ← CSS custom properties, font imports
  tokens.css           ← all --color-*, --text-*, --space-* variables
/components
  /ui
    Button.tsx          ← variant prop: "primary" | "ghost" | "phone"
    SearchBox.tsx       ← tabbed, video-switching logic lives here
    ResultCard.tsx      ← shared by flights and hotels
    TrustStrip.tsx
    PhoneBar.tsx
  /sections
    Hero.tsx
    Destinations.tsx
    Testimonials.tsx
    WhyTripile.tsx
```

---

*Last updated: planning phase. Approved by: [sir's name here]. Do not deviate from color tokens or type scale without written approval.*
