import { ChangeEvent } from 'react';
import styled from 'styled-components';

export interface InputProps {
  label: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, value = 1, onChange }: InputProps) {
  return (
    <InputWrapper data-testid="input-wrapper">
      <InputLabel data-testid="input-label">{label}:</InputLabel>
      <InputBox data-testid="input" type="number" value={value} onChange={onChange} />
    </InputWrapper>
  );
}

export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  padding: 8px;
`;

const InputBox = styled.input`
  padding: 8px;
  text-align: center;
`;
