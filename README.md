# Vano Ventures — Official Multi-Page Website

> **Digital solutions for growing businesses.**  
> We build modern websites and help businesses strengthen their digital presence online.  
> **Web • Digital Presence • Practical Solutions**

A minimal, professional, multi-page website built for **Vano Ventures** with React 19, TypeScript, Tailwind CSS, and Vite.

---

## 🏛️ Multi-Page Architecture

The website is structured into focused, clean routes:

- **`/` (Home)**: Short, high-impact overview with hero, 3 value pillars (*Build / Improve / Grow*), 3 service category previews, Why Vano points, selected genuine work, process preview, and final CTA.
- **`/services`**: Focused presentation of the **8 core launch services** across *Web Development*, *Digital Presence*, and *Digital Marketing*.
- **`/work`**: Genuine portfolio projects (*Construction & Waterproofing Business Website*, *Professional Portfolio & Brand Website*, *Vano Ventures Platform*) without fabricated metrics.
- **`/about`**: Concise venture narrative, 4 core principles (*Practical, Modern, Transparent, Built to Grow*), and honest future roadmap note.
- **`/process`**: 4-step framework (*01 Discover, 02 Plan, 03 Build, 04 Launch*) + what happens after enquiry.
- **`/contact`**: Focused enquiry form with Web3Forms integration, direct WhatsApp/Email contact options, and a compact 6-item FAQ accordion.
- **`/privacy`**: Plain-English Privacy Policy covering form handling and analytics.
- **`/terms`**: Clear, honest Terms of Service.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/) + [Vite 6](https://vite.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [Web3Forms](https://web3forms.com/)
- **Analytics**: Google Analytics 4 (centralized utility with placeholder safety)

---

## 📁 Directory Structure

```text
├── public/
│   ├── favicon.svg             # Branded V mark [VANO_FAVICON]
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # Complete multi-page XML sitemap
├── src/
│   ├── config/
│   │   └── site.ts             # 8 core launch services, brand info & placeholders
│   ├── utils/
│   │   └── analytics.ts        # Centralized GA4 tracking utility
│   ├── components/
│   │   ├── common/
│   │   │   ├── Logo.tsx        # Responsive [VANO VENTURES LOGO] placeholder
│   │   │   ├── Button.tsx      # Accessible button component
│   │   │   ├── Badge.tsx       # Pill badges
│   │   │   └── ScrollToTop.tsx # Route changes: top-scroll & GA4 page_view
│   │   └── layout/
│   │       ├── Navbar.tsx      # Responsive navigation with active route tracking
│   │       ├── Footer.tsx      # Minimal, clean footer
│   │       └── PageLayout.tsx  # Shared page wrapper
│   ├── pages/
│   │   ├── HomePage.tsx        # Minimal homepage
│   │   ├── ServicesPage.tsx    # 8 core services page
│   │   ├── WorkPage.tsx        # Selected genuine work
│   │   ├── AboutPage.tsx       # About narrative & principles
│   │   ├── ProcessPage.tsx     # Process & enquiry steps
│   │   ├── ContactPage.tsx     # Enquiry form, direct contacts, FAQ
│   │   ├── PrivacyPage.tsx     # Privacy Policy
│   │   ├── TermsPage.tsx       # Terms of Service
│   │   └── NotFoundPage.tsx    # 404 page
│   ├── App.tsx                 # Route mapping
│   ├── main.tsx
│   └── index.css               # Design tokens & prefers-reduced-motion
├── test-verify.cjs             # Automated QA test suite
├── .env.example
├── package.json
└── vite.config.ts
```

---

## 🏃 Local Commands

```bash
# Start development server
npm run dev

# Run linter (0 errors, 0 warnings)
npm run lint

# Build static production bundle (dist/)
npm run build

# Run automated QA verification tests (20/20 PASS)
npm test

# Preview production build
npm run preview
```
