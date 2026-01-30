# Mountain State Training

A premium athletic performance training website for Mountain State Training — soccer training and youth clinics based in Morgantown, WV. Built with React, TypeScript, Vite, and Tailwind CSS. WVU-inspired navy and gold aesthetics.

## Features

- **Home** — Hero, programs overview, about section, and contact footer
- **Schedule** — Book private 1-on-1 or small group sessions; view availability by date
- **Youth Clinics** — Upcoming soccer skills clinics with registration
- **About** — Owner bio (Isaac Scheer), trainer profiles, and mission
- **Contact** — Email and phone with responsive layout
- **Liability Waiver** — Modal with participation and image rights text

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** for dev and build
- **Tailwind CSS** (via CDN in `index.html` for quick styling)
- Fonts: Inter, Montserrat (Google Fonts)

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)

## Run Locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**

   ```bash
   npm run preview
   ```

## Project Structure

```
mountain-state-training/
├── index.html          # Entry HTML (Tailwind, fonts, root)
├── index.tsx           # React entry
├── App.tsx             # Main app, routing state, layout
├── constants.tsx       # Colors, nav, schedule, programs, waiver text
├── types.ts            # Shared TypeScript types
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── AboutSection.tsx
│   ├── ProgramSection.tsx
│   ├── ContactSection.tsx   # Footer
│   ├── SchedulePage.tsx
│   ├── ClinicsPage.tsx
│   ├── ContactPage.tsx
│   ├── OwnerBio.tsx
│   └── WaiverModal.tsx
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Publishing to GitHub

1. **Install Git** (if needed): [git-scm.com](https://git-scm.com/) — or run `Git-2.52.0-64-bit.exe` from Downloads if you have it.

2. **Open a terminal** in the project folder:
   ```bash
   cd C:\Users\isaac\Downloads\mountain-state-training
   ```

3. **Initialize and commit** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mountain State Training website"
   ```

4. **Create a new repository on GitHub**: [github.com/new](https://github.com/new) — name it `mountain-state-training` (or any name), leave it empty (no README/license).

5. **Add remote and push** (replace `YOUR_USERNAME` with your GitHub username):
   ```bash
   git branch -M main
   git remote add origin https://github.com/isaacscheer11/Mountain-State-Soccer-Training.git
   git push -u origin main
   ```

   If you use SSH:
   ```bash
   git remote add origin git@github.com:isaacscheer11/Mountain-State-Soccer-Training.git
   git push -u origin main
   ```

## License

Private — Mountain State Training. All rights reserved.
