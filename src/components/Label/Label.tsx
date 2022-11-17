import styled from "styled-components";

interface LabelProps {
  text: string;
  size: 'medium' | 'large';
}

const Label = ({text, size = 'medium'}: LabelProps) => {

  return (
    <LabelWrapper size={size}>
      <p>{text}</p>
    </LabelWrapper>
  )
}

export default Label

const LabelWrapper = styled.div<{size?: string}>`
  border: 1px solid;
  border-radius: 2px;
  text-align: center;
  ${({ size }) => {
    if (size === 'medium') {
      return `padding: 6px`
    }
    return `padding: 12px`
  }};
`;
