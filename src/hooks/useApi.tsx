/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, Dispatch, SetStateAction } from 'react';
import { ExchangeRates } from '../model/exchange';

const BASE_URL = 'https://api.apilayer.com/fixer';
const myHeaders = new Headers();
myHeaders.append('apikey', 'FCAnNcjUbBrRrGmQzsFqMW78CdvDTK9Y');

const requestOptions = {
  method: 'GET',
  redirect: 'follow' as RequestRedirect,
  headers: myHeaders
};

type Props = {
  setCurrencyOptions: Dispatch<SetStateAction<string[]>>;
};

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [rates, setRates] = useState<any>([]);

  const getSymbols = async ({ setCurrencyOptions }: Props) => {
    await fetch(`${BASE_URL}/symbols`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.symbols) {
          setCurrencyOptions([...Object.keys(data.symbols)]);
        }
      });
  };

  const convertCurrency = async (
    setExchangeRates: Dispatch<SetStateAction<ExchangeRates>>,
    setAmountInFromCurrency: (value: boolean) => void,
    popularCurrencies: string[],
    fromCurrency: string
  ) => {
    setLoading(true);
    try {
      await fetch(
        `${BASE_URL}/latest?base=${fromCurrency}&symbols=${popularCurrencies}`,
        requestOptions
      )
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

  const getRatesTimeLine = async (currency: string, symbols: string[]) => {
    setRates([]);
    await fetch(
      `${BASE_URL}/timeseries?start_date=2022-08-18&end_date=2022-10-18&base=${currency}&symbols=${symbols}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        const totalArry = [['Month', ...symbols]];
        setRates(data.rates);
        for (const rate in data.rates) {
          totalArry.push([rate, ...Object.values(data.rates[rate])] as any);
        }
        setRates(totalArry);
      });
  };

  return { getSymbols, convertCurrency, getRatesTimeLine, rates, loading };
};

export default useApi;
