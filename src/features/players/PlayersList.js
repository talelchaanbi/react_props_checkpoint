// PlayersList.js (moved to features/players)
// Imports the players data and maps them into Player cards.

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

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {players.map((player, idx) => (
          <div key={`${player.name}-${player.jerseyNumber}`} className="opacity-0 animate-fadeUp" style={{ animationDelay: `${idx * 90}ms` }}>
            <Player {...player} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlayersList;
