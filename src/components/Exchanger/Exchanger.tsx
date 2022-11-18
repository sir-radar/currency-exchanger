import styled from 'styled-components';
import { ChangeEvent, useEffect, useState } from 'react';
import Input from '../Input/Input';
import Label from '../Label/Label';
import Select from '../Select/Select';
import Arrow from '../../assets/arrow.svg';
import RouteButton from '../RouteButton/RouteButton';
import useApi from '../../hooks/useApi';
import { ExchangeRates } from '../../model/exchange';

interface ExchangerProps {
  title: string;
  showDetailsBtn?: boolean;
}

function Exchanger({ title, showDetailsBtn }: ExchangerProps) {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState<keyof ExchangeRates | string>('USD');
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(false);
  const { getSymbols, convertCurrency, loading } = useApi(fromCurrency);
  const popularCurrencies = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNH', 'HKD'];

  let toAmount = 0;
  const exchangeRate = exchangeRates[toCurrency as keyof ExchangeRates] ?? null;
  if (amountInFromCurrency) {
    toAmount = amount * exchangeRates[toCurrency as keyof ExchangeRates]!;
  }

  const makeAPICalls = async () => {
    await Promise.all([
      getSymbols({ setCurrencyOptions }),
      convertCurrency(setExchangeRates, setAmountInFromCurrency, [...popularCurrencies, toCurrency])
    ]);
  };

  const handleCurrencyConvertion = () => {
    convertCurrency(setExchangeRates, setAmountInFromCurrency, [...popularCurrencies, toCurrency]);
  };

  useEffect(() => {
    makeAPICalls();
  }, []);

  return (
    <ExchangerWrapper>
      <Title>{title}</Title>
      <Content>
        <ConverterSection>
          <Input
            value={amount}
            label="Amount"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(parseInt(e.target.value, 10))}
          />
          <Box>
            <SelectSection>
              <Select
                label="From"
                value={fromCurrency}
                options={currencyOptions}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setFromCurrency(e.target.value)}
              />
              <SwitchBtn>
                <img src={Arrow} alt="Currency swap button" />
              </SwitchBtn>
              <Select
                label="To"
                value={toCurrency}
                options={currencyOptions}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setToCurrency(e.target.value)}
              />
            </SelectSection>
            <ConvertBtn onClick={handleCurrencyConvertion}>
              {loading ? 'Converting... ' : 'Convert'}
            </ConvertBtn>
          </Box>
        </ConverterSection>

        <ResultPanel>
          <Label
            text={`${amount} ${fromCurrency} = ${
              exchangeRate ? `${exchangeRate! * amount} ${toCurrency}` : `XX.XX ${toCurrency}`
            }`}
            size="medium"
          />
          <FlexedContent>
            <Label
              fullWidth={!showDetailsBtn}
              text={`${toAmount || 'XX.XX'} ${toCurrency}`}
              size="large"
            />
            {showDetailsBtn ? <RouteButton text="More Details" url="/" /> : null}
          </FlexedContent>
        </ResultPanel>
      </Content>
    </ExchangerWrapper>
  );
}

export default Exchanger;

const ExchangerWrapper = styled.div`
  margin-top: 24px;
  position: sticky;
  top: 80px;
  background: #fff;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const Content = styled.div`
  padding: 24px 10px;
  background-color: #dcdcdc;
`;

const Box = styled.div``;

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
