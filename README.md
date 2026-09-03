### Memory Card

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://dave-bett-memory-card.netlify.app/)
[![Language: JavaScript](https://img.shields.io/badge/Language-JavaScript%20(ES6+)-yellow.svg)](#tech-stack--tools)
[![Library: React](https://img.shields.io/badge/Library-React-61DAFB.svg)](#tech-stack--tools)
[![API: PokéAPI](https://img.shields.io/badge/API-PokéAPI-EF5350.svg)](https://pokeapi.co/)
[![License: MIT](https://img.shields.io/badge/License-MIT-gray.svg)](LICENSE)

**Memory Card** is an interactive memory game built to fulfill the React curriculum requirements of [The Odin Project](https://www.theodinproject.com/).

The application challenges players to click on unique Pokémon cards without selecting the same card twice. After each selection, the entire grid shuffles unpredictably, testing short-term memory while tracking the current streak and high score.

**Live Application:** [dave-bett-memory-card.netlify.app](https://dave-bett-memory-card.netlify.app/)

---

```text
# Game Loop:
[Display Shuffled Grid of Cards]
  │
  ├──> Player Clicks Card
  │      ↓
  ├──> Check if Card ID is in `clickedCards` Array:
  │      ├── YES: Game Over ──> Check High Score ──> Reset Current Streak
  │      └── NO:  Increment Score ──> Append Card ID ──> Re-shuffle Grid
  │
  └──> Render Updated Scoreboard & Shuffled Layout
```
### Technical Objectives
* **External REST API Integration:** Fetched Pokémon sprites and names asynchronously using fetch within React lifecycle hooks (useEffect), handling loading states cleanly.
* **State Tracking & Lifecycle:** Managed core game loops (current score, all-time high score, and clicked card tracking) leveraging React functional components and hooks (useState, useEffect).
* **Randomization Algorithms:** Implemented algorithmic array shuffling triggered on state changes to prevent predictable card positions.
* **Component Architecture:** Separated presentational UI units (Card, Scoreboard, Header) from the main state-holding game engine.
* **Asynchronous Asset Handling:** Loaded and rendered Pokémon sprites smoothly with dynamic image binding and fallback layout structures.

### Tech Stack & Tools
* **Core:** JavaScript (ES6+), React
* **Data Source:** PokéAPI (RESTful API)
* **Styling:** CSS3 / Modern Flexbox & Grid
* **Build Tool:** Vite
* **Deployment:** Netlify
* **Version Control:** Git, GitHub

### Architecture & Implementation Notes
* **Unbiased Shuffling:** Used an in-place shuffle algorithm on every card click to guarantee unbiased random permutations rather than relying on pseudo-random CSS reordering.
* **High Score Persistence:** Maintained high score calculations against current streaks to update records instantly when the previous top score is surpassed.

### Running Locally
# 1. Clone the repository
```bash
git clone [https://github.com/DaveBett/memory-card.git](https://github.com/DaveBett/memory-card.git)
cd memory-card
```
# 2. Installing dependencies
```bash
npm install
```
# 3. Start development server
```bash
npm run dev
```

### Acknowledgments

Built following the open-source curriculum at [The Odin Project.](https://www.theodinproject.com/lessons/react-new-memory-card)
