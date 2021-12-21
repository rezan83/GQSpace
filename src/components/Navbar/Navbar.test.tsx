import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './';

test('renders burgerBTN', () => {
  render(<Navbar />);
  const burgerBTN = screen.getByTestId('burgerBTN')
  expect(burgerBTN).toBeInTheDocument();
});