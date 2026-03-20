# 🧨 RascoFX

A modern, responsive product catalog website built for a fireworks small business. Features a sleek dark theme with vibrant pink accents, animated hero section, product filtering, YouTube video embeds, and seamless contact form integration.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000?logo=vercel&logoColor=white)

---

## 🌐 Live Demo

**[https://fireworks-zeta-three.vercel.app](https://fireworks-zeta-three.vercel.app)**

---

## 📋 Overview

RascoFX is a freelance project delivered to a local fireworks business seeking an online presence to showcase their product catalog. The application provides customers with an intuitive browsing experience to explore products, watch demonstration videos, and submit inquiries directly to the business owner.

---

## ✨ Features

### User Experience

- **Product Catalog** — Browse 30+ products with high-quality images and detailed descriptions
- **Category Filtering** — Filter products by type: Mortars, Cakes, Big Bores, Roman Candles, Rockets, and Salutes
- **Featured Products** — Highlighted best-sellers on the homepage
- **YouTube Integration** — Embedded video demonstrations on product detail pages
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop viewing
- **Contact Form** — Formspree-powered inquiry submission with success feedback

### Technical Highlights

- **Client-Side Routing** — Seamless navigation with React Router DOM
- **Custom Theme System** — Tailwind CSS v4 with CSS custom properties for consistent branding
- **Image Fallbacks** — Graceful handling of missing product images
- **Scroll Restoration** — Automatic scroll-to-top on route changes
- **Mobile Navigation** — Hamburger menu with smooth toggle animation

---

## 🛠 Tech Stack

| Category               | Technology         |
| ---------------------- | ------------------ |
| **Frontend Framework** | React 19           |
| **Build Tool**         | Vite 7             |
| **Styling**            | Tailwind CSS 4     |
| **Routing**            | React Router DOM 7 |
| **Icons**              | React Icons        |
| **Form Backend**       | Formspree          |
| **Hosting**            | Vercel             |
| **Media Hosting**      | Cloudinary         |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NMasters52/fireworks.git
   cd fireworks
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
fireworks/
├── public/
│   └── products.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ContactCTA.jsx
│   │   ├── ContactForm.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── FilterProducts.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageHeader.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── WhyChooseUs.jsx
│   ├── data/
│   │   ├── fakeData.js
│   │   └── products.js
│   ├── pages/
│   │   ├── Contact.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Products.jsx
│   ├── utils/
│   │   └── imageURL.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🎨 Color Palette

| Color       | Hex       | Usage                          |
| ----------- | --------- | ------------------------------ |
| Background  | `#1A1518` | Primary background             |
| Text        | `#FAF7F3` | Primary text color             |
| Pink/Accent | `#D64D85` | Brand accent, CTAs, highlights |

---

## 📝 Acknowledgments

- **RascoFX** — Client and small business owner
- **DevMasters** — Design & Development

---

## 📄 License

This project is private and proprietary. All rights reserved by RascoFX.

---

_Built with 💖 by [DevMasters](https://github.com/NMasters52)_
