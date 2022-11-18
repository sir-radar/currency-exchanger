import { ChangeEvent } from 'react';
import styled from 'styled-components';

export interface SelectProps {
  value: string;
  label: string;
  options: string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

function Select({ value, label, options, onChange, disabled }: SelectProps) {
  return (
    <SelectWrapper data-testid="select-wrapper">
      <SelectLabel data-testid="select-label">{label}:</SelectLabel>
      <SelectBox data-testid="select-box" value={value} onChange={onChange} disabled={disabled}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectBox>
    </SelectWrapper>
  );
}

export default Select;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SelectLabel = styled.label`
  padding: 8px;
`;

const SelectBox = styled.select`
  padding: 8px;
  text-align: end;
  width: 100%;
`;
