import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input, { InputProps } from './Input';

describe('Input', () => {
  const setup = (props: InputProps) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return render(<Input {...props} />);
  };

  test('component renders without error', () => {
    const prop = {
      label: 'Amount',
      value: 3,
      onChange: vi.fn()
    };
    setup(prop);
    expect(screen.getByTestId('input-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('input-label')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  test('input takes the value set', () => {
    const prop = {
      label: 'Amount',
      value: 3,
      onChange: vi.fn()
    };
    setup(prop);
    const input = screen.getByTestId('input') as HTMLInputElement;
    expect(input.value).toEqual(prop.value.toString());
  });

  test('onchange prop should be called when input value changes', () => {
    const prop = {
      label: 'Amount',
      value: 3,
      onChange: vi.fn()
    };
    const newValue = '479';
    setup(prop);
    const input = screen.getByTestId('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: newValue } });
    expect(prop.onChange).toBeCalled();
  });

  test('input label should be set correctly', () => {
    const prop = {
      label: 'Amount',
      value: 3,
      onChange: vi.fn()
    };

    setup(prop);
    const label = screen.getByTestId('input-label') as HTMLLabelElement;
    expect(label.innerHTML).toBe(`${prop.label}:`);
  });
});
