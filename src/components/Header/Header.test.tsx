import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  test('component renders without error', () => {
    expect(screen.getByTestId('header-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
    expect(screen.getByText(/EUR-USD Details/i)).toBeInTheDocument();
    expect(screen.getByText(/EUR-GBP Details/i)).toBeInTheDocument();
  });
});
