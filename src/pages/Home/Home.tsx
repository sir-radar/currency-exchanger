import { useState } from 'react';
import styled from 'styled-components';
import Exchanger from '../../components/Exchanger/Exchanger';
import { ExchangeRates } from '../../model/exchange';

function Home() {
  const [data, setData] = useState<ExchangeRates>({});
  const [convertedAmount, setConvertedAmount] = useState(0);
  return (
    <HomeWrapper>
      <Exchanger
        sendData={(items: ExchangeRates, amount: number) => {
          setData(items);
          setConvertedAmount(amount);
        }}
        title="Currency Exchanger"
        showDetailsBtn
      />

      <CardsWrapper>
        {Object.keys(data)?.map((key) => (
          <Card key={key}>
            {data[key as keyof ExchangeRates]! * convertedAmount} {key}
          </Card>
        ))}
      </CardsWrapper>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;

const CardsWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin-top: 24px;
  }
`;

const Card = styled.div`
  border: 1px solid;
  border-radius: 5px;
  padding: 24px;
  text-align: center;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
