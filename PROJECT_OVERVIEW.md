# CelebrationShop - E-Commerce Platform

A modern e-commerce platform specializing in curated gifts and custom cakes for all life celebrations.

## Features Implemented

### 🎨 Design System
- **Colors**: Warm, celebratory palette with gold accents and soft pastels
- **Typography**: Outfit font for body text, Caveat for handwriting accents
- **Components**: Consistent button styles, form inputs, and card designs
- **Animations**: Smooth transitions and hover effects throughout

### 🏠 Homepage
- **Hero Section**: Eye-catching gradient background with clear CTAs
- **Shop by Occasion**: Four occasion categories (Birthday, Wedding, Corporate, Anniversary)
- **Featured Products**: Grid of bestselling gift items with ratings
- **Custom Cake CTA**: Prominent call-to-action for cake builder
- **Why Choose Us**: Three value propositions with icons

### 🎂 Custom Cake Builder (4-Step Wizard)
1. **Choose Flavor**: 12 delicious cake flavors with descriptions and pricing
2. **Select Size**: 4 size options from small (6-8 people) to extra large (40-50)
3. **Pick Theme**: 10 decoration themes with additional costs (optional)
4. **Add Message**: Custom message up to 50 characters with live preview (optional)
- **Live Summary**: Sticky sidebar showing selections and calculated price
- **Step Progress**: Visual indicator showing completion status

### 🛒 Shopping Cart & Checkout
- **Persistent Cart**: State management with Zustand, persisted to localStorage
- **Cart Items**: Display with quantity controls, custom cake details, remove option
- **Delivery Options**: Same-day ($10) or scheduled delivery ($5)
- **Gift Message**: Optional custom message for recipient
- **Delivery Address**: Full address form with validation
- **Payment**: Credit card form (mockup for demo)
- **Order Summary**: Live calculation of subtotal, delivery fee, and total

### 📦 Product Management
- **Product Data**: Mock data for gifts (birthday, wedding, corporate categories)
- **Product Cards**: Beautiful cards with images, ratings, occasions, and quick-add
- **Cart Integration**: One-click add to cart with toast notifications

### 🧭 Navigation & Layout
- **Header**: Logo, category navigation, search (placeholder), cart with badge
- **Mobile Menu**: Responsive sheet menu for mobile devices
- **Footer**: Multi-column layout with links, contact info, newsletter signup, social links

## Technical Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: Zustand for cart
- **Icons**: Lucide React
- **Toast Notifications**: Sonner
- **TypeScript**: Full type safety

## Key Files

### Core Pages
- `src/app/page.tsx` - Homepage with hero, products, occasions
- `src/app/cake-builder/page.tsx` - 4-step custom cake wizard
- `src/app/checkout/page.tsx` - Cart review and checkout flow

### Components
- `src/components/layout/EcommerceHeader.tsx` - Navigation header
- `src/components/layout/EcommerceFooter.tsx` - Site footer
- `src/components/products/ProductCard.tsx` - Reusable product card

### Data & State
- `src/lib/data/products.ts` - Mock product data (gifts, cakes, flavors, sizes, themes)
- `src/lib/store/cart-store.ts` - Zustand cart state management

### Styling
- `src/app/globals.css` - Global design system with colors, typography, animations

## Mock Data Overview

### Gifts
- 4 featured gifts (chocolate box, photo frame, flowers, gift basket)
- 2 birthday gifts
- 2 wedding gifts
- 2 corporate gifts

### Custom Cakes
- 12 flavors (prices: $30-$45)
- 4 sizes (multipliers: 1.0x - 3.5x)
- 10 themes (additional cost: $20-$35)

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site.

## Future Enhancements

- User authentication and accounts
- Real payment processing integration
- Order tracking and history
- Product reviews and ratings
- Search functionality
- Wishlist feature
- Email notifications
- Admin dashboard for inventory management
