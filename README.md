# Vamsi Batchu — Portfolio Website

A sleek, dark-themed portfolio built with **React.js**, **Material UI (MUI)**, and **Three.js**.

## Tech Stack

- **React.js** (v18) — Component architecture
- **MUI v5** — UI components & theming
- **Three.js** — 3D animated hero section (neon ring + particles)
- **Fonts:** Rajdhani, Outfit, Space Mono (Google Fonts)

## Getting Started

### Prerequisites
- Node.js v16+ (recommended v18)
- npm v8+

### Install & Run

```bash
npm install
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      — Fixed navbar with scroll detection
│   ├── Hero.jsx        — Three.js animated hero section
│   ├── About.jsx       — Bio + personal info
│   ├── Experience.jsx  — Interactive experience timeline
│   ├── Projects.jsx    — Featured project cards
│   ├── Skills.jsx      — Animated skill bars
│   ├── Contact.jsx     — Contact form + info
│   └── Footer.jsx      — Footer with links
├── theme/
│   └── theme.js        — MUI custom dark theme
├── App.jsx             — Root component
└── index.js            — Entry point
```

## Features

- 🌑 Dark neon-red aesthetic
- 🔴 Three.js animated neon ring with floating particles
- 📱 Fully responsive (mobile/tablet/desktop)
- ✨ Scroll-triggered animations
- 🎯 Interactive experience selector
- 📊 Animated skill progress bars
- 📬 Contact form
- 💾 Download CV button
