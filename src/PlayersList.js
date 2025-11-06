// PlayersList.js (checkpoint version at src root)
// Imports Player and the players array, then maps them into Cards.

import React from 'react';
import Player from './Player';
import players from './players';

const listStyle = {
  maxWidth: 1200,
  margin: '40px auto',
  padding: '0 16px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: 16,
  alignItems: 'stretch',
};

const headingStyle = {
  textAlign: 'center',
  fontWeight: 800,
  marginBottom: 16,
};

const subtitleStyle = {
  textAlign: 'center',
  color: '#475569',
  marginBottom: 24,
};

const PlayersList = () => {
  return (
    <section style={listStyle}>
      <h1 style={headingStyle}>FIFA Player Cards</h1>
      <p style={subtitleStyle}>Explore top players and their stats</p>
      <div style={gridStyle}>
        {players.map((player) => (
          <Player key={`${player.name}-${player.jerseyNumber}`} {...player} />
        ))}
      </div>
    </section>
  );
};

export default PlayersList;
