# Dev Stack Explorer

Dev Stack Explorer is a responsive React application for discovering development technologies and building a personalized stack. It helps developers compare frontend, backend, database, language, styling, DevOps, and tooling options, then save the technologies they want in one place.

## Technology Used

- React 19 with TypeScript
- Vite
- Tailwind CSS 4 and DaisyUI
- React Toastify
- React Icons
- Local JSON data

## Features

1. **Technology Discovery** — Displays 15 technology cards loaded from `public/data/technologies.json`, including category, difficulty, rating, badge, and description.
2. **Personal Stack Builder** — Lets users add, remove, and clear technologies while preventing duplicate entries and showing toast feedback.
3. **Responsive Brand Experience** — Includes a sticky responsive navbar, two-tone hero section, responsive card grid, stack sidebar, and footer with a shared orange-pink-violet brand gradient.

## Get Started

### Prerequisites

- Node.js
- npm

### Install and Run

```bash
npm install
npm run dev
```

Open the local development URL shown by Vite in the browser.

### Build and Check

```bash
npm run build
npm run lint
```

## Project Structure

```text
src/
├── App.tsx                  # App layout, JSON fetch promise, and toast container
├── index.css                # Tailwind, DaisyUI, and shared brand gradient
├── types/
│   └── technologyTypes.tsx  # Technology data types
└── components/
    ├── Navbar.tsx           # Desktop and mobile navigation
    ├── Hero.tsx             # Hero heading, description, actions, and image
    ├── Technology.tsx       # Technology grid and stack state
    ├── TechnologyCard.tsx   # Individual technology card
    ├── StackPanel.tsx       # Selected stack summary and empty state
    ├── StackItems.tsx       # Selected technology rows and remove actions
    └── Footer.tsx           # Brand, link groups, and legal information

public/
├── data/
│   └── technologies.json    # Local technology data
└── images/                  # Brand and technology illustrations
```

## React Concepts

### What is JSX, and why is it used in React?

JSX is a JavaScript syntax extension that lets us write HTML-like markup inside JavaScript. React uses it to describe UI components in a readable way, and the build tool converts JSX into React elements.

### What is the difference between props and state?

Props are values passed from a parent component to a child component and are read by the child. State is data managed inside a component; changing state causes that component to render again with the updated values.

### What does the `useState` hook do, and where did you use it in this project?

`useState` stores local, changeable data in a function component. It is used in `Technology.tsx` for `selectedTechnologies`, which keeps track of the technologies currently added to Your Stack.

### What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side-effect code after a component renders, such as requesting data and saving the response in state. A JSON request can be placed inside `useEffect` so it runs after the component mounts and the loading or loaded data can then be displayed. This project currently uses an async fetch promise with React `use()` and `<Suspense>` for the same loading behavior.

### Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item between renders. This makes list updates, removals, and reordering more reliable and prevents React from updating the wrong item. The project uses each technology's unique `id` as the key.

### What is conditional rendering?

Conditional rendering displays different UI depending on a condition. In `StackPanel.tsx`, the empty-stack message is shown when `selectedTechnologies` is empty; otherwise, the selected `StackItems` and **Remove All** button are shown.

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data through props. A child sends information back by calling a function that the parent passes as a prop. For example, `Technology.tsx` passes a technology and its selected state to `TechnologyCard.tsx`; the card calls `onToggleStack` when its button is clicked.
