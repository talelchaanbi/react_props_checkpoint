// Footer.js
// Minimal site footer with copyright and simple social links (icons as inline SVGs)
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Dynamic current year for convenience */}
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} ProBall Profiles. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-500">
          {/* Example social links (placeholder URLs) */}
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.8.42-1.32.76-1.62-2.66-.3-5.46-1.34-5.46-5.98 0-1.32.47-2.4 1.25-3.24-.13-.3-.54-1.51.12-3.15 0 0 1.02-.33 3.35 1.24a11.6 11.6 0 0 1 6.1 0c2.33-1.57 3.35-1.24 3.35-1.24.66 1.64.25 2.85.12 3.15.78.84 1.25 1.92 1.25 3.24 0 4.66-2.8 5.68-5.47 5.98.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M19.633 7.997c.013.18.013.36.013.543 0 5.53-4.21 11.9-11.9 11.9-2.366 0-4.566-.69-6.416-1.874.33.038.648.051.992.051 1.958 0 3.757-.66 5.19-1.78a4.194 4.194 0 0 1-3.92-2.91c.255.038.51.064.778.064.374 0 .748-.051 1.096-.14a4.185 4.185 0 0 1-3.356-4.11v-.051c.56.31 1.2.5 1.884.525a4.18 4.18 0 0 1-1.868-3.482c0-.77.204-1.462.56-2.074a11.89 11.89 0 0 0 8.63 4.38 4.725 4.725 0 0 1-.102-.957 4.185 4.185 0 0 1 7.245-2.864 8.23 8.23 0 0 0 2.657-1.01 4.2 4.2 0 0 1-1.84 2.32 8.41 8.41 0 0 0 2.41-.65 9.009 9.009 0 0 1-2.096 2.17Z"/></svg>
          </a>
          <a href="mailto:hello@proball.pro" aria-label="Email" className="hover:text-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Zm2.4-.75 7.35 5.082L19.35 6H4.65Z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
