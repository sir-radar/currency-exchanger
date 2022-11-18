import { useState } from 'react';
import { ExchangeRates } from '../model/exchange';

const BASE_URL = 'https://api.apilayer.com/fixer';
const myHeaders = new Headers();
myHeaders.append('apikey', 'EPI14q3doBObXhJ51edXtukt0JU2pdRJ');

const requestOptions = {
  method: 'GET',
  redirect: 'follow' as RequestRedirect,
  headers: myHeaders
};

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [rates, setRates] = useState<any>([]);
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(false);

  const getSymbols = async () => {
    try {
      await fetch(`${BASE_URL}/symbols`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          if (data.symbols) {
            setCurrencyOptions([...Object.keys(data.symbols)]);
          }
        });
    } catch (e) {
      setCurrencyOptions([]);
    }
  };

  const convertCurrency = async (popularCurrencies: string[], fromCurrency: string) => {
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
      setExchangeRates({});
      setAmountInFromCurrency(false);
      setLoading(false);
    }
  };

  const getRatesTimeLine = async (currency: string, symbols: string[]) => {
    setRates([]);
    try {
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
    } catch (e) {
      setRates([]);
    }
  };

  return {
    getSymbols,
    convertCurrency,
    getRatesTimeLine,
    rates,
    currencyOptions,
    exchangeRates,
    amountInFromCurrency,
    loading
  };
};

export default useApi;
