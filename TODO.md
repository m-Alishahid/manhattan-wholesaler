# TODO List for MANHATTAN Wholesales Importers Inc. E-commerce Website

## Project Initialization
- [x] Initialize Next.js project with `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes`
- [ ] Install additional dependencies if needed (e.g., for icons, forms)

## Styling and Theme
- [ ] Configure Tailwind CSS with custom color palette (green, white, light gray) based on logo.png
- [ ] Create global styles and responsive design

## Pages Creation
- [ ] Create index.js (Home page: hero, featured products, why choose us)
- [ ] Create products.js (Shop page: product grid with filters)
- [ ] Create [id].js (Product Detail page: image, description, specs, add to cart/quote)
- [ ] Create about.js (About Us: company intro, experience)
- [ ] Create contact.js (Contact: form, business details)

## Components
- [ ] Create Header component with logo.png integration
- [ ] Create Footer component
- [ ] Create ProductCard component
- [ ] Create Cart component/modal
- [ ] Create Filter component for products

## API Routes
- [ ] Create /api/products (GET for product list)
- [ ] Create /api/cart (POST for add to cart, GET for cart items)
- [ ] Create /api/contact (POST for contact form submission)

## Functionality
- [ ] Implement cart functionality using React state and localStorage
- [ ] Add inquiry-based checkout (form submission)
- [ ] Implement product filtering by category
- [ ] Add dummy product data

## Integration and Polish
- [ ] Integrate logo.png in header/navigation
- [ ] Ensure SEO with meta tags, semantic HTML
- [ ] Make fully responsive (mobile, tablet, desktop)
- [ ] Optimize for fast loading

## Testing
- [ ] Run `npm run dev` and test all pages and functionality
- [ ] Verify responsiveness on different devices
- [ ] Test cart and form submissions
