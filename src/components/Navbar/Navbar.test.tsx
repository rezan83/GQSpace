import React from 'react';
import { fireEvent, render, screen , cleanup} from '@testing-library/react';
import Navbar from './';
import { MemoryRouter } from 'react-router-dom';

describe('burger button functionality', ()=>{
  afterEach(cleanup)
  it('renders burgerBTN', () => {
    render(<Navbar />, {wrapper: MemoryRouter});
    const burgerBTN = screen.getByTestId('burgerBTN')
    expect(burgerBTN).toBeInTheDocument();
  });

  it('press burger button changes second nave class', async () => {
    render(<Navbar />, {wrapper: MemoryRouter});
    const burgerBTN = screen.getByTestId('burgerBTN')
    fireEvent.click(burgerBTN)    
    const secondNav = await screen.findByTestId('secondNav')
    expect(secondNav).toHaveClass('second-nav-big');
  });

  it('press burger button twice toggle back second nave class', async () => {
    render(<Navbar />, {wrapper: MemoryRouter});
    const burgerBTN = screen.getByTestId('burgerBTN')
    fireEvent.click(burgerBTN)
    fireEvent.click(burgerBTN)
    const secondNav = await screen.findByTestId('secondNav')
    expect(secondNav).toHaveClass('second-nav');
  });
})