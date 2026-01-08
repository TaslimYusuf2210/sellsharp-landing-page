# SellSharp | AI-Powered Sales Outreach Landing Page

SellSharp is a high-conversion, modern SaaS landing page built to showcase an AI-driven email generator. The platform is designed for sales teams, agencies, and SaaS founders who need to scale personalized outreach without losing the human touch.

This project was created as part of a job application task. The focus is on clean presentation of SellSharp’s value proposition and features, organized for clarity and conversion.

## Live Demo

Deployed on Vercel:
https://sellsharp-landing-page.vercel.app/

## 🚀 Product Vision
SellSharp bridges the gap between generic automation and manual research. It uses predictive AI to analyze lead intent and draft hyper-personalized sequences that bypass spam filters and increase reply rates.

## 🛠 Tech Stack
- **Framework:** [React.js](https://reactjs.org/) (Functional Components)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strictly typed)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first, zero gradients)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Subtle scroll reveals)

## 🎨 Design System
The UI follows a **"Clean Growth"** aesthetic:
- **Mode:** Strict Light Mode.
- **Primary Color:** Cobalt Blue (`#2563EB`) — used for trust and action.
- **Secondary Color:** Slate Dark (`#0F172A`) — used for authoritative typography.
- **Success Color:** Emerald Green (`#10B981`) — used for ROI metrics.
- **Visual Style:** No gradients. High-contrast, 1px solid borders, and generous whitespace for a professional enterprise feel.

## 🏗 Component Architecture
The project follows a modular, component-based architecture in React. Each section of the landing page is isolated into its own TypeScript file for maximum maintainability and clean prop-drilling.

```text
src/
 └── components/
      ├── CTA.tsx             # Final conversion & "Risk-Free" closing section
      ├── FeaturesGrid.tsx    # Bento-grid layout for core product features
      ├── Hero.tsx            # Main value proposition and primary action
      ├── Layout.tsx          # Wrapper component for global spacing and SEO
      ├── Navbar.tsx          # Sticky navigation with "Start Free" anchor
      ├── ProblemSection.tsx  # Highlights user pain points (e.g., The Template Trap)
      ├── ProcessStep.tsx     # 1-2-3 walkthrough of how SellSharp works
      └── Testimonials.tsx    # Social proof "Wall of Love" and trust badges.

## Project Structure
sellsharp-landing-page/
├── dist/                     # Production build output
├── node_modules/             # Project dependencies
├── public/                   # Static assets
│   └── assets/               # Images, icons, and other media
├── src/
│   ├── assets/               # Local assets imported into components
│   ├── components/           # Reusable UI components
│   │   ├── CTA.tsx           # Call-to-action section
│   │   ├── FeaturesGrid.tsx  # Product features section
│   │   ├── Hero.tsx          # Hero / headline section
│   │   ├── Layout.tsx        # Page layout wrapper
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── ProblemSection.tsx# Problem statement section
│   │   ├── ProcessStep.tsx   # How-it-works steps
│   │   └── Testimonials.tsx  # Social proof section
│   ├── lib/                  # Utility functions and helpers
│   ├── App.tsx               # Root application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── .gitignore
├── eslint.config.js           # ESLint configuration
├── index.html                # HTML entry file
├── package.json              # Project metadata and scripts
├── package-lock.json         # Dependency lock file
├── README.md                 # Project documentation
├── tsconfig.app.json         # TypeScript app configuration
└── tsconfig.json             # TypeScript base configuration

## Setup & Running Locally
1. Clone the repo
git clone https://github.com/TaslimYusuf2210/sellsharp-landing-page.git

2. Install Dependencies
npm install

3. Run the development server
npm run dev

4. Open landing page inside browser of your choice
http://localhost:5173/ or any link provided by your IDE

## Design Decisions

This landing page emphasizes clarity and conversion:

Strong headline + subheadline to convey the core value immediately

Benefit-driven features that tie to real sales outcomes

Simple layout with logical flow from problem to solution

Prominent CTAs that encourage conversion without distraction
(Adapted based on typical SaaS landing page best practices.)

## Customization Notes

To update content:

Text and Copy: Edit directly in page.js or relevant components

Images: Replace files in /public/images

Styling: Update Tailwind config or CSS classes in components

## Acknowledgements

SellSharp product insights sourced from official website
(https://sellsharp.co
)

