import { useState, Dispatch, SetStateAction } from 'react';
import { ExchangeRates } from '../model/exchange';

const BASE_URL = 'https://api.apilayer.com/fixer';
const myHeaders = new Headers();
myHeaders.append('apikey', 'qA0biegPupU5MUghqM9Fd9Rf0eQs99sl');

const requestOptions = {
  method: 'GET',
  redirect: 'follow' as RequestRedirect,
  headers: myHeaders
};

type Props = {
  setCurrencyOptions: Dispatch<SetStateAction<string[]>>;
};

const useApi = (fromCurrency: string) => {
  const [loading, setLoading] = useState(false);

  function getSymbols({ setCurrencyOptions }: Props) {
    fetch(`${BASE_URL}/symbols`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.symbols) {
          setCurrencyOptions([...Object.keys(data.symbols)]);
        }
      });
  }

  const convertCurrency = (
    setExchangeRates: Dispatch<SetStateAction<ExchangeRates>>,
    setAmountInFromCurrency: (value: boolean) => void,
    popularCurrencies: string[]
  ) => {
    setLoading(true);
    try {
      fetch(`${BASE_URL}/latest?base=${fromCurrency}&symbols=${popularCurrencies}`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          setExchangeRates(data.rates);
          setAmountInFromCurrency(true);
          setLoading(false);
        });
    } catch (e) {
      throw new Error('Error during currency convertion');
    }
  };

  return { getSymbols, convertCurrency, loading };
};

export default useApi;
