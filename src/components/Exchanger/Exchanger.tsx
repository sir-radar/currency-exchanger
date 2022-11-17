import styled from 'styled-components';
import Input from '../Input/Input';
import Label from '../Label/Label';
import Select from '../Select/Select';
import Arrow from '../../assets/arrow.svg';
import RouteButton from '../RouteButton/RouteButton';

interface ExchangerProps {
  title: string;
  showDetailsBtn?: boolean;
}

function Exchanger({ title, showDetailsBtn }: ExchangerProps) {
  return (
    <ExchangerWrapper>
      <h2>{title}</h2>
      <Content>
        <ConverterSection>
          <Input label="Amount" onChange={() => null} />
          <Content>
            <SelectSection>
              <Select label="From" value="" options={['USD', 'EUR']} onChange={() => null} />
              <SwitchBtn>
                <img src={Arrow} alt="Currency swap button" />
              </SwitchBtn>
              <Select label="To" value="" options={['USD', 'EUR']} onChange={() => null} />
            </SelectSection>
            <ConvertBtn>Convert</ConvertBtn>
          </Content>
        </ConverterSection>

        <ResultPanel>
          <Label text="1.00 EUR = XXX USD" size="medium" />
          <FlexedContent>
            <Label fullWidth={!showDetailsBtn} text="XXX USD" size="large" />
            {showDetailsBtn ? <RouteButton text="More Details" url="/" /> : null}
          </FlexedContent>
        </ResultPanel>
      </Content>
    </ExchangerWrapper>
  );
}

export default Exchanger;

const ExchangerWrapper = styled.div``;

const Content = styled.div``;

const FlexedContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const ConverterSection = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 2fr;
`;

const SelectSection = styled.div`
  display: flex;
  gap: 24px;
`;

const ConvertBtn = styled.button`
  width: 100%;
  background: blue;
  text-align: center;
  padding: 12px;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 24px;
`;

const SwitchBtn = styled.button`
  background: transparent;
  border: none;
  align-self: end;
  cursor: pointer;
`;

const ResultPanel = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin-top: 24px;
`;
