// AppProps.js
// Minimal root component for the Props checkpoint version of the app.
// It imports bootstrap CSS locally so it won't affect the main app unless this entry is used.

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';

const containerStyle = {
  paddingTop: 24,
  paddingBottom: 24,
};

export default function AppProps() {
  return (
    <main style={containerStyle}>
      <PlayersList />
    </main>
  );
}
