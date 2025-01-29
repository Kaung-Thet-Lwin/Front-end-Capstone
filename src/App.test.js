import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingMain from './BookingMain';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

test('Returns availableTimes', () => {
  render(<BookingMain />);

  const timeElement = screen.getByText(/17:00/);

  expect(timeElement).toBeInTheDocument();
});
