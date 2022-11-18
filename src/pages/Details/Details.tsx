import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import Exchanger from '../../components/Exchanger/Exchanger';
import currencies from '../../assets/currency-symbols.json';
import useApi from '../../hooks/useApi';

function Details() {
  const { from, to, moneyValue } = useParams();
  const { getRatesTimeLine, rates } = useApi();
  const [newCurrency, setNewCurrency] = useState(to);

  const currencyDetail = currencies.filter((currency) => currency.abbreviation === from)[0];

  const options = {
    chart: {
      title: 'Historical rates',
      subtitle: `${from} and ${newCurrency}: 2021-2022`
    }
  };

  const requestRates = () => {
    getRatesTimeLine(from!, [from!, newCurrency!]);
  };

  useEffect(() => {
    // requestRates();
  }, [newCurrency]);

  return (
    <PageWrapper>
      <Exchanger
        title={`${from} - ${currencyDetail.currency}`}
        showBackBtn
        from={from}
        to={newCurrency}
        initialAmount={parseInt(moneyValue!, 10)}
        disableFromSelect
        nofifyOnConvertion={(currency) => setNewCurrency(currency)}
      />

      <CardsWrapper>
        {rates.length ? (
          <Chart chartType="Bar" width="100%" height="400px" data={rates} options={options} />
        ) : (
          <Loader>Loading....</Loader>
        )}
      </CardsWrapper>
    </PageWrapper>
  );
}

export default Details;

const PageWrapper = styled.div``;
const CardsWrapper = styled.div`
  margin-top: 24px;
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
