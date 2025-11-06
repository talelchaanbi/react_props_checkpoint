// Player.js (checkpoint version at src root)
// Renders a single player's details using a react-bootstrap Card.
// Requirements covered:
// - Destructure props for all attributes
// - Use inline styling
// - Define default props

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const cardStyle = {
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
};

const headerStyle = {
  fontWeight: 700,
};

const imageStyle = {
  objectFit: 'cover',
  width: '100%',
  height: 280,
};

const metaStyle = { fontSize: 14, color: '#64748b' };

const badgeStyle = {
  display: 'inline-block',
  padding: '4px 10px',
  borderRadius: 999,
  background: '#f1f5f9',
  color: '#0f172a',
  marginRight: 8,
};

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={cardStyle} data-testid="player-card-bootstrap">
      {imageUrl && (
        <Card.Img variant="top" src={imageUrl} alt={`${name} portrait`} style={imageStyle} />
      )}
      <Card.Body>
        <Card.Title style={headerStyle}>{name}</Card.Title>
        <Card.Subtitle className="mb-2" style={metaStyle}>{team}</Card.Subtitle>
        <div className="mb-2">
          <span style={badgeStyle}>Nationality: {nationality}</span>
          <span style={badgeStyle}>Jersey: {jerseyNumber}</span>
          <span style={badgeStyle}>Age: {age}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string,
};

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://via.placeholder.com/600x400?text=Player',
};

export default Player;
