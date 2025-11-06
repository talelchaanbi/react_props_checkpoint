import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme-dark');
    const enabled = saved === 'true';
    setIsDark(enabled);
    document.documentElement.classList.toggle('dark', enabled);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme-dark', String(next));
  };

  const handleNavClick = (e, href) => {
    // Soft transition: smooth scroll and add a temporary fade to the target section
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.remove('animate-fadeUp');
      // force reflow to restart animation
      void el.offsetWidth;
      el.classList.add('animate-fadeUp');
      setTimeout(() => el.classList.remove('animate-fadeUp'), 650);
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200 dark:border-slate-800 dark:bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
  <a href="#home" className="inline-flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 text-white grid place-items-center font-bold shadow">P</span>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 animate-gradientX">ProBall Profiles</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
          {[
            { href: '#home', label: 'Home' },
            { href: '#players', label: 'Players' },
            { href: '#about', label: 'About' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative py-1 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              {item.label}
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-purple-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle theme"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-300"><path d="M21.64 13.64A9 9 0 1 1 10.36 2.36a7 7 0 1 0 11.28 11.28Z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-slate-600"><path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm9-6a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM7 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm9.78 6.78a1 1 0 0 1 0 1.42l-1.41 1.41a1 1 0 0 1-1.42-1.4l1.41-1.43a1 1 0 0 1 1.42 0ZM8.05 4.05a1 1 0 0 1 0 1.42L6.64 6.88a1 1 0 1 1-1.42-1.41l1.41-1.41a1 1 0 0 1 1.42 0Zm9.31 1.42a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1-1.4 1.42l-1.43-1.41a1 1 0 0 1 0-1.42ZM4.64 16.1a1 1 0 0 1 1.42 0l1.41 1.43a1 1 0 1 1-1.42 1.4l-1.41-1.41a1 1 0 0 1 0-1.42Z"/></svg>
            )}
          </button>
          <a href="#join" className="inline-flex items-center rounded-lg bg-gradient-to-r from-brand-600 to-purple-600 text-white px-3 py-2 text-sm font-semibold shadow hover:from-brand-500 hover:to-purple-500 transition-colors">Join Community</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
