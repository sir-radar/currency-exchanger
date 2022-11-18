import { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Exchanger from '../../components/Exchanger/Exchanger';
import { ExchangeRates } from '../../model/exchange';
import currencies from '../../assets/currency-symbols.json';

function Details() {
  const { from, to, moneyValue } = useParams();
  // const [data, setData] = useState<ExchangeRates>({});
  // const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyDetail = currencies.filter((currency) => currency.abbreviation === from)[0];
  return (
    <HomeWrapper>
      <Exchanger
        // sendData={(items: ExchangeRates, amount: number) => {
        //   setData(items);
        //   setConvertedAmount(amount);
        // }}
        title={`${from} - ${currencyDetail.currency}`}
        showBackBtn
        from={from}
        to={to}
        initialAmount={parseInt(moneyValue!, 10)}
        disableFromSelect
      />

      <CardsWrapper>
        {/* {Object.keys(data)?.map((key) => (
          <Card key={key}>
            {data[key as keyof ExchangeRates]! * convertedAmount} {key}
          </Card>
        ))} */}
      </CardsWrapper>
    </HomeWrapper>
  );
}

export default Details;

const HomeWrapper = styled.div``;

const CardsWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-top: 24px;
`;
