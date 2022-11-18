import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Select, { SelectProps } from './Select';

describe('Input', () => {
  const setup = (props: SelectProps) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return render(<Select {...props} />);
  };

  const initialprop = {
    label: 'From',
    value: 'USD',
    onChange: vi.fn(),
    options: ['USD', 'EUR'],
    disabled: false
  };

  test('component renders without error', () => {
    setup(initialprop);
    expect(screen.getByTestId('select-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('select-label')).toBeInTheDocument();
    expect(screen.getByTestId('select-box')).toBeInTheDocument();
  });

  test('select takes the value set', () => {
    setup(initialprop);
    const select = screen.getByTestId('select-box') as HTMLSelectElement;
    expect(select.value).toEqual(initialprop.value);
  });

  test('onchange prop should be called when input value changes', () => {
    const newValue = 'EUR';
    setup(initialprop);
    const select = screen.getByTestId('select-box') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: newValue } });
    expect(initialprop.onChange).toBeCalled();
  });

  test('select label should be set correctly', () => {
    setup(initialprop);
    const label = screen.getByTestId('select-label') as HTMLLabelElement;
    expect(label.innerHTML).toBe(`${initialprop.label}:`);
  });
});
