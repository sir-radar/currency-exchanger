import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Label, { LabelProps } from './Label';

describe('Label', () => {
  const setup = (props: LabelProps) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return render(<Label {...props} />);
  };

  test('component renders without error', () => {
    const prop: LabelProps = {
      text: 'Amount',
      size: 'medium',
      fullWidth: false
    };
    setup(prop);
    expect(screen.getByTestId('label-wrapper')).toBeInTheDocument();
  });

  test('label text should be set correctly', () => {
    const prop: LabelProps = {
      text: 'Amount',
      size: 'medium',
      fullWidth: false
    };
    setup(prop);
    const p = screen.getByTestId('label-text') as HTMLParagraphElement;
    expect(p.innerHTML).toBe(prop.text);
  });
});
