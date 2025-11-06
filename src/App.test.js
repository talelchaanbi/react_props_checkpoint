import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FIFA Player Cards heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /fifa player cards/i });
  expect(heading).toBeInTheDocument();
});
