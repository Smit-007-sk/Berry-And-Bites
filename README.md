# Berry & Bites – Premium Dessert Stall Website

A beautiful, minimal, modern, and responsive website built for **Berry & Bites**, an artisanal dessert stall business specializing in velvety cheesecakes, signature warm Belgian strawberry chocolate glasses, and hand-muddled botanical mojitos.

---

## 🍰 Brand & Aesthetic Identity

- **Palette**: Warm cream (`#FAF7F2`), Strawberry crimson (`#D93B58`), Chocolate brown (`#2A1C19`), Deep cocoa text (`#211A18`).
- **Typography**: Cormorant Garamond (Editorial serif headings) + Plus Jakarta Sans (Clean, modern body typography).
- **Aesthetic**: Floating glassmorphism navigation, soft ambient shadows, editorial food photography, micro-interactions without excessive or jarring animations.
- **Tagline**: *"Every Bite, A Little Happiness."*

---

## 🚀 Features & Architecture

1. **Floating Glassmorphism Navbar (`src/components/Navbar.tsx`)**:
   - Translucent frosted glass effect (`backdrop-blur-md`) with subtle border & shadow.
   - Brand logo badge, desktop navigation links, and direct Instagram CTA button.
   - Smooth mobile sliding drawer navigation with full touch responsiveness.
   - Sticky scroll detection.

2. **Hero Section with Automatic Slider (`src/components/HeroSlider.tsx`)**:
   - Editorial dessert photography with automatic 3-second transitions.
   - Pause on hover, manual left/right controls, and active indicator dots.
   - Brand introduction tag *"A Little Happiness in Every Bite."* and smooth scroll CTA to `#menu`.

3. **Brand Quote Section (`src/components/BrandQuote.tsx`)**:
   - *"Life is sweeter when shared with something delicious."*
   - Subtle decorative accents and delicate serif typography.

4. **Product Categories with Dynamic Homepage Filtering (`src/components/CategorySelector.tsx` & `ProductGrid.tsx`)**:
   - 3 Signature collections:
     - **Cheesecakes** (Biscoff, Oreo, Triple Choco, Blueberry, Strawberry, Dark Chocolate, Milk Chocolate, White Chocolate, Nutella).
     - **Strawberry Chocolate** (Strawberry Chocolate Glass).
     - **Mojitos** (Classic Mint, Lemon, Blueberry).
   - Selecting a category filters the live product grid instantly without reloading or page jumping.
   - Filter pill shortcuts including "All Items".

5. **Individual Product Detail Pages (`src/app/menu/[category]/[product]/page.tsx`)**:
   - Static pre-rendering (`generateStaticParams`) for all dessert routes:
     - `/menu/cheesecake/biscoff-cheesecake`
     - `/menu/cheesecake/oreo-cheesecake`
     - `/menu/strawberry-chocolate/strawberry-chocolate-glass`
     - `/menu/mojitos/classic-mint-mojito`
     - ...and all remaining cheesecakes and mojitos.
   - High-resolution hero display, flavor highlights & notes, editable pricing, "Order / Enquire on Instagram" CTAs, "Back to Menu" navigation, and "You Might Also Love" related items.

6. **Centralized Configuration & Editable Data**:
   - `src/config/site.ts`: Instagram URL (`https://www.instagram.com/`), handle, business hours, and location.
   - `src/data/categories.ts`: Category definitions, imagery, and taglines.
   - `src/data/products.ts`: All product details, image links, highlights, and descriptions.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + Custom Instagram SVG
- **Deployment**: Zero-backend static build, ready for Vercel deployment.

---

## 💻 Development & Build

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build
npm run build
```
