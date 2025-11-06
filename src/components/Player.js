// Player.js
// Tailwind-styled player card component.
// Responsibilities:
// - Display player portrait (uniform aspect) with hover zoom
// - Show jersey number and nationality flag as overlays
// - Render basic stats (nationality, jersey #, age)
// - Provide a subtle interactive 3D tilt on mouse move

import React, { useRef, useState } from 'react';

// Helper: map nationality names to flag emojis (fallback to white flag)
const flagFor = (country) => {
  const map = {
    Argentina: '🇦🇷',
    Portugal: '🇵🇹',
    France: '🇫🇷',
    Brazil: '🇧🇷',
  };
  return map[country] || '🏳️';
};

// Props with default values ensure the card renders even with partial data
const Player = ({
  name = 'Unknown Player',
  team = 'Unknown Team',
  nationality = 'Unknown',
  jerseyNumber = 0,
  age = 0,
  imageUrl = 'https://via.placeholder.com/300x300?text=Player',
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState('');

  // Compute a transform based on pointer position to simulate a tilt effect
  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((y - midY) / midY) * -6; // tilt up/down
    const rotateY = ((x - midX) / midX) * 6; // tilt left/right
    setTilt(`rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`);
  };

  // Reset transform on mouse leave
  const handleMouseLeave = () => {
    setTilt('');
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-testid="player-card"
      className="group w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 shadow hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-800 relative hover:-translate-y-0.5 will-change-transform"
      style={{ transform: tilt ? `${tilt}` : undefined }}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ padding: 1 }}>
        <div className="w-full h-full rounded-[14px] bg-gradient-to-r from-brand-500/40 via-purple-500/30 to-pink-500/30 blur-[6px] opacity-30"></div>
      </div>

      {/* Media area with consistent aspect ratio and animated image */}
      <div className="relative bg-slate-50 dark:bg-slate-800 p-2">
        {/* Jersey ribbon */}
        <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-black/70 text-white text-xs font-semibold px-2 py-1">
          <span>#</span>
          <span>{jerseyNumber}</span>
        </span>

        {/* Flag badge */}
        <span className="absolute right-3 top-3 z-10 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white dark:bg-slate-900 shadow text-base">
          {flagFor(nationality)}
        </span>

        <div className="overflow-hidden rounded-xl bg-white dark:bg-slate-900">
          <div className="w-full aspect-[4/5]">
            <img
              src={imageUrl}
              alt={`${name} portrait`}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-slate-900 tracking-tight">{name}</h3>
        <p className="text-sm text-slate-500">{team}</p>

        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="bg-slate-50 rounded-lg p-3">
            <dt className="text-slate-500">Nationality</dt>
            <dd className="font-medium text-slate-800">{nationality}</dd>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <dt className="text-slate-500">Jersey #</dt>
            <dd className="font-medium text-slate-800">{jerseyNumber}</dd>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 col-span-2">
            <dt className="text-slate-500">Age</dt>
            <dd className="font-medium text-slate-800">{age}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default Player;
