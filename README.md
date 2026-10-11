# 🎟️ PlaySuper Rewards Arcade

> **Mobile-First In-Game Commerce & Gamified Loyalty Overlay Plugin**  
> Turning real-world brand rewards into hard-earned trophies inside the gaming progression loop.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

## 💡 Product Note: The Hypothesis

### *Achievement vs. Utility*
Traditional e-commerce is **utility-driven** (high intent, low friction). Customers search for a product with clear purchasing intent.

**In-game commerce is dopamine-driven** (low shopping intent, high achievement intent). Gamers do not open a casual game to buy a food discount or beauty voucher; they play for progression, status, and challenge completion. 

Therefore, the **PlaySuper** storefront cannot look or feel like a standard product grid or an intrusive web ad. It is framed as an **Arcade Prize Counter**—turning real-world brands (e.g., Swiggy, Nykaa, boAt) into hard-earned trophies that keep players immersed inside the core gameplay loop.

---

## 🎯 Key Product Decisions & Behavioral Economics

### 1. The Escalating Daily Streak (Solving D1–D7 Retention)
* **Problem:** Hyper-casual and casual games suffer from severe user drop-offs after Day 1.
* **Mechanism:** A 7-day horizontal streak tracker is pinned at the very top of the store.
* **Psychology:** Leverages **loss aversion**—players return daily to protect their streak and unlock the high-value Day 7 **"Mystery Loot Box."** This directly tackles the partner studio's primary retention metric.

### 2. Visual Progress Bars (The Zeigarnik Effect)
* **Problem:** Flat ticket prices create friction and feel unreachable for casual players.
* **Mechanism:** Rather than standard pricing tags, every prize displays a thick, dynamic progress bar (e.g., `"450 / 800 TIX"` or `"450 / 300 TIX • READY!"`).
* **Psychology:** The **Zeigarnik Effect** proves that people remember and obsess over unfinished tasks. Seeing a Nykaa voucher at 56% completion drives the player to play *"just one more level"* to close the gap.

### 3. Zero-Friction Checkout (No Cart, Instant Gratification)
* **Problem:** Traditional multi-step checkout funnels and shopping carts kill mobile gaming momentum.
* **Mechanism:** Single-click modal overlay. Pressing the chunky 3D **"CASH IN TICKETS"** button instantly deducts tickets from the live HUD balance, triggers a celebratory particle burst, and reveals a voucher with a one-tap copyable promo code (`PLAY-SWIGGY-X7B`).
* **Metaphor:** Directly mimics the tactile joy of a physical arcade redemption ticket dispenser.

### 4. Neon Arcade UI over White-Label E-Commerce
* **Problem:** Generic white-label grids feel like third-party intrusive banner ads and cause ad-blindness.
* **Mechanism:** A solid midnight-blue background (`#0D0E25`) with thick 2px comic-style borders and saturated neon glows (**Electric Hot Pink `#FF007F`**, **Cyber Cyan `#00E5FF`**, **Burning Orange `#FF5500`**, and **Neon Yellow `#FFE600`**).
* **Result:** Feels native to an in-game HUD overlay plugin, eliminating the psychological barrier to interacting with commercial rewards.

---

## 📊 Funnels & Key Metrics to Track

To evaluate and continuously optimize the Rewards Arcade, the following event taxonomy is monitored:

| Metric | Event Funnel | Strategic Insight |
|---|---|---|
| **Store Discovery Rate** | `% of DAU clicking 'Rewards' HUD icon` | Measures hook visibility and entry-point prominence in the game HUD. |
| **Streak Drop-off Funnel** | `Day 1 Claim` ➔ `Day 3 Claim` ➔ `Day 7 Claim` | Identifies retention drop-off spikes. If drop-off spikes at Day 3, rewards pacing between Days 3–5 requires A/B re-balancing. |
| **Earn-to-Burn Ratio** | `Velocity of tickets earned vs. tickets spent` | Detects economy hoarding. If tickets accumulate without redemption, mid-tier prizes require better visual merchandising. |
| **Redemption Friction** | `Item Clicked` ➔ `Cash In Clicked` ➔ `Code Copied` | Measures micro-funnel drop-off within the single-step redemption modal. |

---

## 🛠️ Architecture & Prototype Details

* **Strict Mobile-First Frame:** Bounded by `h-[100dvh]` and `max-w-md mx-auto` to emulate native mobile game overlays without layout shifts.
* **Natural Momentum Scrolling:** Container uses `overflow-y-auto`, `overscroll-behavior-y-contain`, and `-webkit-overflow-scrolling: touch` for smooth touch scrolling on older and smaller devices (e.g., iPhone SE).
* **Sticky Viewports:** The top HUD / Header bar and the bottom info banner utilize `sticky` positioning with `backdrop-blur-md` so prizes glide seamlessly underneath.
* **Zero External Dependencies Audio:** Synthesizes retro 8-bit chimes, fanfare, and button clicks directly in-browser using the native **Web Audio API** (zero latency, zero asset loading failures).
* **2D Vector Game Art:** Bespoke SVG illustrations with thick 2px dark comic strokes and saturated fills (Burger & Fries, Luxury Cosmetics, boAt Headphones on glowing pedestal, and Mystery Chest).

---

## ⚡ Tech Stack & Toolchain

* **Frontend:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack) & [React 19](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons & FX:** [Lucide React](https://lucide.dev/) & [canvas-confetti](https://github.com/catdad/canvas-confetti)
* **Generative & Vibe-Coding:** **Anti-Gravity** (DeepMind agentic coding engine used for rapid UI/UX state iteration and styling synthesis)
* **Version Control & CI/CD:** Git, GitHub CLI, and Vercel

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** 18.18+ or 20+
* **npm**, **pnpm**, or **yarn**

### Installation
```bash
# Clone the repository
git clone https://github.com/Stutyay/PlaySuper-Reward-Arcade.git

# Navigate to project folder
cd PlaySuper-Reward-Arcade

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port specified by Next.js) in your mobile responsive view to test the overlay.

### Production Build
```bash
npm run build
npm run start
```

---

## 🚢 Vercel Deployment

This project is pre-configured for automated Vercel deployments:
1. Import `Stutyay/PlaySuper-Reward-Arcade` in the [Vercel Dashboard](https://vercel.com/new).
2. Framework Preset will automatically detect **Next.js**.
3. Click **Deploy**.
