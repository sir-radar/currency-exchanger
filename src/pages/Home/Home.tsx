import styled from 'styled-components';
import Exchanger from '../../components/Exchanger/Exchanger';

function Home() {
  return (
    <HomeWrapper>
      <Exchanger title="Currency Exchanger" showDetailsBtn />

      <CardsWrapper>
        <Card> This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card> This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card> This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card> This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card> This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card> This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
        <Card>This is a card</Card>
      </CardsWrapper>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;

const CardsWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-top: 24px;
`;

const Card = styled.div`
  border: 1px solid;
  border-radius: 5px;
  padding: 24px;
  text-align: center;
`;
