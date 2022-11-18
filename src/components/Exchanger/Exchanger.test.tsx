import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Exchanger, { ExchangerProps } from './Exchanger';

describe('Input', () => {
  const setup = (props: ExchangerProps) => {
    return render(
      <MemoryRouter>
        <Exchanger {...props} />
      </MemoryRouter>
    );
  };

  const initialprop = {
    title: 'From',
    showDetailsBtn: true,
    showBackBtn: false,
    sendData: vi.fn(),
    from: '',
    to: '',
    initialAmount: 300,
    disableFromSelect: false,
    nofifyOnConvertion: vi.fn()
  };

  test('component renders without error', () => {
    setup(initialprop);
    expect(screen.getByTestId('exchange-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('exchange-content')).toBeInTheDocument();
    expect(screen.getByTestId('title-box')).toBeInTheDocument();
  });
});
