import styled from 'styled-components';

interface SelectProps {
  value: string;
  label: string;
  options: string[];
  onChange: () => void;
  disabled?: boolean;
}

function Select({ value, label, options, onChange, disabled }: SelectProps) {
  return (
    <SelectWrapper>
      <SelectLabel>{label}:</SelectLabel>
      <SelectBox value={value} onChange={onChange} disabled={disabled}>
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