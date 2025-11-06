// Carousel.js
// Lightweight fade-transition carousel with autoplay, manual controls, and dots.
// Consumes slide data from src/data/slides.js (title, subtitle, image).
import React, { useEffect, useState } from 'react';
import slides from '../data/slides';

// Simple autoplay carousel that showcases featured images with soft transitions
const Carousel = () => {

  const [index, setIndex] = useState(0);

  // Autoplay: advance slide every 4 seconds
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i) => setIndex(((i % slides.length) + slides.length) % slides.length);

  return (
    <div className="relative mx-auto w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow border border-slate-200 dark:border-slate-800">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold drop-shadow">{s.title}</h3>
              <p className="text-sm sm:text-base opacity-90">{s.subtitle}</p>
            </div>
            {/* Credit */}
            {s.credit && (
              <a
                className="absolute right-2 top-2 text-xs text-white/80 hover:text-white bg-black/30 rounded px-2 py-1 backdrop-blur-sm"
                href={s.creditUrl || '#'}
                target="_blank"
                rel="noreferrer"
                title="Image credit"
              >
                {s.credit}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        aria-label="Previous"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-100 grid place-items-center shadow hover:bg-white transition"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={() => goTo(index + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-100 grid place-items-center shadow hover:bg-white transition"
      >
        ›
      </button>

      {/* Dots: small indicators to jump to slides */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? 'bg-white w-6' : 'bg-white/60 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
