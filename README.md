# Mountain State Training

A modern, responsive website for **Mountain State Training** — an athletic performance training platform featuring WVU-inspired aesthetics. Built with React, TypeScript, and Vite.

## Features

- **Home** — Hero, about section, program overview
- **Schedule** — Weekly training sessions, youth clinics, booking info
- **Clinics** — Soccer skills clinic details and registration
- **About** — Owner bio and mission
- **Contact** — Contact form and waiver modal

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS (CDN)

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `npm run dev`  | Start development server       |
| `npm run build`| Build for production           |
| `npm run preview` | Preview production build    |

## Project Structure

```
├── components/     # React components (Header, Hero, SchedulePage, etc.)
├── App.tsx         # Main app with view routing
├── constants.tsx   # Site content and configuration
├── index.css       # Global styles
└── index.html      # HTML entry point
```

## License

MIT
