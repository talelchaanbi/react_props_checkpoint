// PlayersList.js
// High-level list component responsible for rendering all player cards.
// Data flow:
// - Imports an array of player objects from `src/data/players.js`
// - Iterates over the array and spreads each object into the <Player /> component
// Presentation:
// - Uses a responsive CSS grid (1–4 cols) and a subtle staggered fade-up animation
// - Heading uses a gradient text for visual hierarchy
// Accessibility:
// - Section element is labeled by the <h1> below, improving landmark navigation

import React from 'react';
import Player from '../../components/Player';
import players from '../../data/players';

const PlayersList = () => {
  return (
    <section id="players" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-24">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600">FIFA Player Cards</span>
      </h1>
      <p className="text-center text-slate-600 mt-2">Explore top players and their stats</p>

      {/* Responsive grid: 1 column on mobile up to 4 columns on large screens */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {players.map((player, idx) => (
          // Each item is wrapped to control per-card animation delay
          <div key={`${player.name}-${player.jerseyNumber}`} className="opacity-0 animate-fadeUp" style={{ animationDelay: `${idx * 90}ms` }}>
            <Player {...player} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlayersList;
