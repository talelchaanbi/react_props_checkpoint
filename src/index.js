import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Toggle this flag to switch between the creative app (App) and the Props checkpoint app (AppProps)
// false -> current creative site (Tailwind)
// true  -> minimal Props checkpoint version (react-bootstrap Card)
const USE_PROPS_VERSION = false;

const root = ReactDOM.createRoot(document.getElementById('root'));

if (USE_PROPS_VERSION) {
  // Dynamically import AppProps to avoid pulling in bootstrap CSS unless needed
  import('./AppProps').then(({ default: AppProps }) => {
    root.render(
      <React.StrictMode>
        <AppProps />
      </React.StrictMode>
    );
  });
} else {
  import('./App').then(({ default: App }) => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
}

// Entry point with optional Props-only switch
