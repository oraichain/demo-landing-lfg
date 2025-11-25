# LFG Video App

A fully responsive Vite React app featuring two video pages with horizontal scrollable card sliders.

## Project Structure

```
/
├── src/
│   ├── assets/
│   │   ├── video1.mp4
│   │   ├── video2.mp4
│   │   └── thumbs/
│   │       ├── video1-poster.jpg
│   │       └── video2-poster.jpg
│   ├── components/
│   │   ├── VideoPlayer.jsx
│   │   ├── CardSlider.jsx
│   │   ├── OutlineCard.jsx
│   │   └── NavBar.jsx
│   ├── pages/
│   │   ├── VideoOnePage.jsx
│   │   └── VideoTwoPage.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

This creates a `dist/` directory with the production build.

## Deployment to Versal

1. Run `npm install` to install dependencies
2. Run `npm run build` to create the production build
3. Set the output directory to `dist/` in Versal
4. Deploy directly to Versal

## Features

- **Responsive 16:9 Video Player**: Works on all screen sizes
- **Horizontal Card Slider**: Scrollable turnstile with snap scrolling
- **Mobile-First Design**: Swipe gestures, smooth transitions
- **Dark Mode UI**: Clean, modern, cinematic design
- **React Router**: Navigation between Video 1 and Video 2 pages

## Routes

- `/` - Redirects to `/video-1`
- `/video-1` - The LFG Quant Ecosystem video page
- `/video-2` - Why the LFG Token Matters video page

## Styling

The app uses a dark theme with:
- Black backgrounds (#000000)
- Deep gray UI elements (#1a1a1a, #1f1f1f)
- White text with yellow accents (#ffd700)
- Rounded corners (8px)
- Smooth transitions (0.25s ease)

