# 🍨 Raj Icecream — Artisan Ice Creams & Splendid Scoops

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](package.json)
[![License: ISC](https://img.shields.io/badge/License-ISC-brightgreen.svg)](package.json)
[![Platform](https://img.shields.io/badge/Deployment-Vercel%20Ready-black.svg?logo=vercel)](vercel.json)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](styles.css)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](app.js)

> Handcrafted artisan ice cream storefront and online ordering platform for **Raj Icecream**, located in Bhuj, Gujarat. Features an editorial luxury aesthetic inspired by artisan scoop parlours, interactive flavour discovery, custom 4-pint box builder, and seamless WhatsApp direct checkout.

---

## 📌 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Local Run](#installation--local-run)
- [Deployment](#-deployment)
  - [Deploying to Vercel](#deploying-to-vercel)
  - [Deploying to Netlify / GitHub Pages](#deploying-to-netlify--github-pages)
- [Configuration & Customization](#-configuration--customization)
  - [Updating Flavours & Pricing](#updating-flavours--pricing)
  - [Updating WhatsApp Checkout Number](#updating-whatsapp-checkout-number)
  - [Store & Parlour Details](#store--parlour-details)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🍦 About The Project

**Raj Icecream** is a modern, responsive web application for an artisan ice cream brand and parlour in Bhuj. Designed with a luxury editorial aesthetic, the website emphasizes:
- 100% pure whole dairy milk & slow-churned small batches.
- Zero palm oil and zero synthetic emulsifiers.
- Premium ingredients like Kashmiri Mongra saffron, California almonds, Ratnagiri Alphonso mangoes, and Belgian dark chocolate.

The frontend is lightweight, dependency-free (vanilla JS/CSS), blazingly fast, and configured for seamless static hosting and mobile ordering.

---

## ✨ Key Features

- **Luxury Editorial UI/UX**:
  - Announcement ticker marquee for daily specials and shop timings.
  - Multi-tiered sticky header with desktop mega-menus and a smooth mobile navigation drawer.
  - High-end typography with Google Fonts (*Fraunces*, *Plus Jakarta Sans*, and *Caveat*).

- **Dynamic Flavour Catalog**:
  - Filterable by categories (*Heritage*, *Chocolate*, *Seasonal Fruit*, *Modern Confections*).
  - Detailed tasting notes, real ingredient breakdowns, and sensory profile bars (creaminess, sweetness, crunch, fruitiness).
  - Dynamic serving-size selector (*Single Scoop*, *Double*, *500ml Pint*, *1000ml Tub*) with real-time price updates.
  - Quick-view modal for flavour deep-dives.

- **Custom 4-Pint Box Builder**:
  - Visual 4-slot interactive bundle builder.
  - Mix and match artisan pints with live slot indicators and bundle pricing.

- **Smart E-Commerce Cart**:
  - Slide-out cart drawer with item quantity adjustments and automatic price calculation.
  - `localStorage` persistence so cart contents stay preserved across reloads.

- **Direct WhatsApp Checkout**:
  - Instant order routing to WhatsApp with structured order summaries (items, serving sizes, custom box flavours, customer address, and grand total).
  - Zero payment-gateway overhead needed for local doorstep deliveries.

- **Instant Search Overlay**:
  - Search by flavour name, ingredient, or tasting note with instant keyboard shortcut / modal access.

- **Production-Ready Optimization**:
  - Optimized `vercel.json` with aggressive caching headers for static assets (`/images/`, CSS, JS) and security headers (`X-Frame-Options`, `X-Content-Type-Options`).

---

## 🛠 Tech Stack

- **Markup**: Semantic HTML5 with OpenGraph social tags.
- **Styling**: Modern CSS3 (CSS Custom Properties, Flexbox, CSS Grid, animations, and fluid responsive design).
- **Interactivity**: Vanilla JavaScript (ES6+ modular state management, DOM manipulation, `localStorage`).
- **Icons & Typography**:
  - [Font Awesome 6](https://fontawesome.com/)
  - [Google Fonts](https://fonts.google.com/) (*Fraunces*, *Plus Jakarta Sans*, *Caveat*)
- **Hosting & CI/CD**: Ready for [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [GitHub Pages](https://pages.github.com/).

---

## 📂 Project Structure

```text
Raj-Icecream/
├── index.html            # Primary landing page and DOM structure
├── styles.css            # Global design tokens, layout, and responsive styles
├── app.js                # Core logic, flavour data, cart, box builder, & checkout
├── logo.png              # Brand crest and logo
├── package.json          # Node scripts and project metadata
├── vercel.json           # Vercel deployment routes and caching headers
├── .gitignore            # Ignored files (node_modules, .vercel, OS cache)
└── images/               # High-res photography assets
    ├── craft-*.jpg       # Craftsmanship and ingredient banners
    ├── delivery-*.jpg    # Delivery packaging photos
    ├── flavor-*.jpg      # Individual artisan flavour imagery
    ├── hero-*.jpg        # Hero banners
    ├── insta-*.jpg       # Social media showcase gallery
    └── parlour-vibe.jpg  # Parlour ambiance and scoop shop photos
```

---

## 🚀 Getting Started

### Prerequisites

No special backend is required. You only need a web browser and optionally Node.js (for local development server).

### Installation & Local Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/raj-icecream.git
   cd raj-icecream
   ```

2. **Run locally**:
   - **Using Node (recommended)**:
     ```bash
     npm start
     ```
     This starts a local static server using `serve` and prints the local address (e.g., `http://localhost:3000`).

   - **Using Python 3**:
     ```bash
     python -m http.server 3000
     ```

   - **Using VS Code Live Server**:
     Right-click `index.html` and choose **"Open with Live Server"**.

3. Open your browser and navigate to `http://localhost:3000`.

---

## 🌐 Deployment

### Deploying to Vercel

The repository includes a ready-to-use `vercel.json` configuration file.

1. Install the Vercel CLI (optional) or link your GitHub repository on [vercel.com](https://vercel.com):
   ```bash
   npm i -g vercel
   vercel
   ```
2. Follow the on-screen prompts to deploy. For production:
   ```bash
   vercel --prod
   ```

### Deploying to Netlify / GitHub Pages

- **Netlify**: Drag and drop the project folder into Netlify Drop or link the GitHub repository (Publish directory: `.`).
- **GitHub Pages**: Go to repository **Settings** → **Pages** → Source: **Deploy from a branch** (`master` / `main` / root).

---

## ⚙️ Configuration & Customization

### Updating Flavours & Pricing

All flavours, badges, tasting notes, ingredients, and prices are stored in [`app.js`](app.js#L10-L230):

```javascript
// app.js
const FLAVOURS = [
  {
    id: 'rajbhog-kesar',
    name: 'Royal Rajbhog Kesar',
    category: 'heritage',
    badge: 'Signature',
    badgeClass: 'accent-orange',
    img: 'images/flavor-rajbhog.jpg',
    tastingNotes: ['Kashmiri Saffron', 'California Almonds', 'Green Cardamom'],
    desc: '...',
    ingredients: '...',
    profile: { creaminess: 96, sweetness: 78, crunch: 85, fruitiness: 15 },
    servings: {
      scoop: { label: 'Scoop', price: 60 },
      double: { label: 'Double', price: 110 },
      pint: { label: 'Pint 500ml', price: 240 },
      tub: { label: 'Tub 1000ml', price: 450 }
    }
  },
  // Add new flavours here...
];
```

### Updating WhatsApp Checkout Number

In [`app.js`](app.js), locate the checkout function:
```javascript
// app.js (around line 935)
const whatsappNumber = '919876543210'; // Replace with your parlour WhatsApp business number
```

### Store & Parlour Details

Update contact details, operational hours, and address in [`index.html`](index.html):
- **Address**: Prestige, Opp. GK General Hospital, Bhuj - Kutch, Gujarat 370001
- **Hours**: Monday – Sunday: 11:00 AM – 12:30 AM Midnight

---

## 🤝 Contributing

Contributions, feature suggestions, and improvements are welcome!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/NewFeature`).
3. Commit your Changes (`git commit -m 'Add NewFeature'`).
4. Push to the Branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the **ISC License**. See [`package.json`](package.json) for details.

---

<p align="center">
  Crafted with ❤️ for <strong>Raj Icecream</strong> • Bhuj, Gujarat
</p>
