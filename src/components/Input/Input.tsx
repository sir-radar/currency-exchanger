import styled from 'styled-components';

interface InputProps {
  label: string;
  onChange: () => void;
}

function Input({ label, onChange }: InputProps) {
  return (
    <InputWrapper>
      <InputLabel>{label}:</InputLabel>
      <InputBox onChange={onChange} />
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
