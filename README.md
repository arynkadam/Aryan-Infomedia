# Aryan Infomedia — Company Website

A professional, clean, and high-performance website for **Aryan Infomedia** — a digital solutions company combining technology and digital marketing for established brands and larger companies.

---

## Project Status

> 🟡 **Planning complete. Build not yet started.**

---

## About This Project

This website presents Aryan Infomedia's services, portfolio, and contact information. It is designed with a clean white, premium corporate aesthetic — built to rank well on search engines and perform across all screen sizes.

### Services Covered
- Software Development & Management
- Website Development
- Meta Ads Management
- Digital Marketing
- Software Maintenance & Support
- Business Automation
- SEO
- Landing Pages & Lead Generation

---

## Technology Stack

| Tool | Purpose | Why We Chose It |
|---|---|---|
| **Next.js** | Website framework | Fast pages, built-in SEO, organised file structure |
| **React** | UI component system | Industry standard, reusable building blocks |
| **Tailwind CSS** | Styling | Consistent design, responsive layout built-in |
| **Node.js** | Runtime environment | Required to run Next.js and Tailwind locally |
| **npm** | Package manager | Installs and manages all tools |
| **Git** | Version control | Tracks changes, safe undo history |
| **Lucide React** | Icon library | Clean minimal icons matching our design |

---

## Pages

| Page | URL | Description |
|---|---|---|
| Home | `/` | Hero, services overview, value props, CTA |
| About | `/about` | Company story, mission, values |
| Services | `/services` | Full 8-service overview |
| Portfolio | `/portfolio` | Past work / case studies |
| Contact | `/contact` | Enquiry form + contact details |

---

## Prerequisites (Before Setup)

### 1. Install Node.js

Node.js is the engine that runs this project on your computer. It is free and safe.

1. Go to [https://nodejs.org](https://nodejs.org)
2. Click the **"LTS"** (Long Term Support) download button — this is the stable, recommended version
3. Run the installer and follow the steps (click Next → Next → Install)
4. Restart your computer after installation

**Verify the installation** by opening PowerShell and typing:
```powershell
node --version
npm --version
```
Both should print a version number (e.g., `v20.x.x` and `10.x.x`).

### 2. Git (Already installed ✅)

Git version 2.53.0 is already present on this machine.

---

## Project Setup (After Approval)

> ⚠️ **Do not run these commands yet.** These are documented here for reference. Each step will be explained and confirmed before execution.

### Step 1 — Navigate to the project folder
```powershell
cd c:\AryanInfomedia
```

### Step 2 — Create the Next.js project
```powershell
npx create-next-app@latest . --typescript=false --tailwind --eslint --app=false --src-dir --import-alias "@/*"
```

### Step 3 — Install icons library
```powershell
npm install lucide-react
```

### Step 4 — Start the development server
```powershell
npm run dev
```
Then open your browser and go to: **http://localhost:3000**

---

## Folder Structure (Planned)

```
c:\AryanInfomedia\
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── ServiceCard.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── ServicesGrid.jsx
│   │       ├── WhyChooseUs.jsx
│   │       └── CTAStrip.jsx
│   │
│   ├── pages/
│   │   ├── index.jsx          ← Home page
│   │   ├── about.jsx
│   │   ├── services.jsx
│   │   ├── portfolio.jsx
│   │   └── contact.jsx
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── data/
│       └── services.js        ← All service content in one place
│
├── public/
│   ├── logo.svg               ← [PLACEHOLDER: Add company logo here]
│   └── favicon.ico
│
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md                  ← This file
```

---

## Design System

### Colours
| Role | Hex |
|---|---|
| Background | `#FFFFFF` |
| Primary Text (Deep Navy) | `#0F172A` |
| Secondary Text (Slate) | `#475569` |
| Accent (Blue) | `#2563EB` |
| Border / Divider | `#E2E8F0` |
| Subtle Background | `#F8FAFC` |

### Fonts
- **Inter** — used for all text (headings and body)
- Loaded via Google Fonts (free)

---

## Local Development

```powershell
npm run dev        # Start local preview at http://localhost:3000
npm run build      # Build the production-ready version
npm run start      # Run the production build locally
```

---

## Content Placeholders

The following information is **not yet provided** and will appear as clearly labelled placeholders until supplied:

- [ ] Company logo / favicon
- [ ] Business email address
- [ ] Phone number
- [ ] Office address / city
- [ ] Founding story / mission statement
- [ ] Team member names and bios
- [ ] Portfolio / case study examples

> ⚠️ No client names, testimonials, statistics, or certifications are invented. All placeholder sections are clearly labelled.

---

## What Is NOT Included (Phase 1)

- No live form submission (requires a backend — planned for Phase 2)
- No individual service sub-pages (Phase 2)
- No blog (Phase 3)
- No deployment or hosting configuration
- No database or external API connections
- No paid tools or subscriptions

---

## Next Steps After Review

1. ✅ Review this README and the project plan
2. ⬜ Install Node.js (see Prerequisites above)
3. ⬜ Answer the 6 design decisions in the plan document
4. ⬜ Approve setup commands
5. ⬜ Begin building page by page

---

*Built with Next.js · Styled with Tailwind CSS · Maintained with Git*
