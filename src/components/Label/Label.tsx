import styled from 'styled-components';

export interface LabelProps {
  text: string;
  size: 'medium' | 'large';
  fullWidth?: boolean;
}

function Label({ text, size = 'medium', fullWidth }: LabelProps) {
  return (
    <LabelWrapper data-testid="label-wrapper" fullWidth={fullWidth} size={size}>
      <p data-testid="label-text">{text}</p>
    </LabelWrapper>
  );
}

export default Label;

const LabelWrapper = styled.div<{ size?: string; fullWidth?: boolean }>`
  border: 1px solid;
  border-radius: 2px;
  text-align: center;
  ${({ size }) => {
    if (size === 'medium') {
      return `padding: 6px`;
    }
    return `padding: 24px`;
  }};
  ${({ fullWidth, size }) => {
    if (fullWidth) {
      return `width: 100%;`;
    }
    if (!fullWidth && size === 'large') {
      return `flex: 1`;
    }
    return '';
  }};
`;
