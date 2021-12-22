import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from './';
import { MemoryRouter } from 'react-router-dom';
import { eventNames } from 'process';

describe('burger button functionality', ()=>{

  it('renders burgerBTN', () => {
    render(<Navbar />, {wrapper: MemoryRouter});
    const burgerBTN = screen.getByTestId('burgerBTN')
    
    expect(burgerBTN).toBeInTheDocument();
  });

  it('press burger button changes second nave class', () => {
    render(<Navbar />, {wrapper: MemoryRouter});
    const burgerBTN = screen.getByTestId('burgerBTN')
    const secondNav = screen.getByTestId('secondNav')
    fireEvent.click(burgerBTN)    
    expect(secondNav).toHaveClass('second-nav-big');
  });
})