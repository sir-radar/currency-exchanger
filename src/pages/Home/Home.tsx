import styled from 'styled-components';
import Exchanger from '../../components/Exchanger/Exchanger';

function Home() {
  return (
    <HomeWrapper>
      <Exchanger title="Currency Exchanger" showDetailsBtn />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;
