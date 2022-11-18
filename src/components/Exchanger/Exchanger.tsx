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
  showBackBtn?: boolean;
  sendData?: (data: ExchangeRates, amount: number) => void;
  from?: string;
  to?: string;
  initialAmount?: number;
  disableFromSelect?: boolean;
  nofifyOnConvertion?: (data: string) => void;
}

function Exchanger({
  title,
  showDetailsBtn,
  showBackBtn,
  sendData,
  from,
  to,
  initialAmount,
  disableFromSelect,
  nofifyOnConvertion
}: ExchangerProps) {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState(from || 'EUR');
  const [toCurrency, setToCurrency] = useState<keyof ExchangeRates | string>(to || 'USD');
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [amount, setAmount] = useState(initialAmount || 1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(false);
  const { getSymbols, convertCurrency, loading } = useApi();
  const popularCurrencies = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'NZD', 'HKD'];

  let toAmount = 0;
  const exchangeRate = exchangeRates[toCurrency as keyof ExchangeRates] ?? null;
  if (amountInFromCurrency) {
    toAmount = amount * exchangeRates[toCurrency as keyof ExchangeRates]!;
  }

  const disableDropDown = amount === null || amount === undefined;

  const makeAPICalls = async () => {
    await Promise.all([
      getSymbols({ setCurrencyOptions }),
      convertCurrency(
        setExchangeRates,
        setAmountInFromCurrency,
        [...popularCurrencies, toCurrency],
        fromCurrency
      )
    ]);
  };

  const handleCurrencyConvertion = () => {
    convertCurrency(
      setExchangeRates,
      setAmountInFromCurrency,
      [...popularCurrencies, toCurrency],
      fromCurrency
    );
    if (nofifyOnConvertion) {
      nofifyOnConvertion(toCurrency);
    }
  };

  const switchCurrency = () => {
    const tempTo = fromCurrency;
    const tempFrom = toCurrency;
    setToCurrency(tempTo);
    setFromCurrency(tempFrom);
    convertCurrency(
      setExchangeRates,
      setAmountInFromCurrency,
      [...popularCurrencies, tempTo],
      tempFrom
    );
  };

  useEffect(() => {
    if (sendData) {
      const temRates = { ...exchangeRates };
      if (Object.keys(temRates).length > popularCurrencies.length) {
        delete temRates[toCurrency as keyof ExchangeRates];
      }
      sendData(temRates, amount);
    }
  }, [exchangeRates]);

  useEffect(() => {
    // makeAPICalls();
  }, []);

  return (
    <ExchangerWrapper>
      <TitleBox>
        <Title>{title}</Title>
        {showBackBtn ? <RouteButton text="Back to Home" url="/" /> : null}
      </TitleBox>
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
                disabled={disableFromSelect || disableDropDown}
              />

              <SwitchBtn onClick={switchCurrency}>
                <img src={Arrow} alt="Currency swap button" />
              </SwitchBtn>

              <Select
                label="To"
                value={toCurrency}
                options={currencyOptions}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setToCurrency(e.target.value)}
                disabled={disableDropDown}
              />
            </SelectSection>

            <ConvertBtn onClick={handleCurrencyConvertion}>
              {loading ? 'Converting... ' : 'Convert'}
            </ConvertBtn>
          </Box>
        </ConverterSection>

        <ResultPanel>
          <Label
            text={`${amount || 0} ${fromCurrency} = ${
              exchangeRate ? `${exchangeRate! * amount} ${toCurrency}` : `XX.XX ${toCurrency}`
            }`}
            size="medium"
          />
          <FlexedContent>
            <Label
              fullWidth={!showDetailsBtn}
              text={`${exchangeRate ? toAmount : 'XX.XX'} ${toCurrency}`}
              size="large"
            />
            {showDetailsBtn ? (
              <RouteButton
                text="More Details"
                url={`details/${fromCurrency}/${toCurrency}/${amount}`}
              />
            ) : null}
          </FlexedContent>
        </ResultPanel>
      </Content>
    </ExchangerWrapper>
  );
}

export default Exchanger;

const ExchangerWrapper = styled.div`
  margin-top: 24px;
  background: #fff;
  @media only screen and (min-width: 768px) {
    position: sticky;
    top: 80px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2``;

const Content = styled.div`
  padding: 24px 10px;
  background-color: #dcdcdc;
`;

const Box = styled.div``;

const FlexedContent = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

const ConverterSection = styled.div`
  @media only screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 2fr;
  }
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
  margin-top: 24px;
  @media only screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    margin-top: 24px;
  }
`;
