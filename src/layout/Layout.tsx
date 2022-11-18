import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/Header';

function Layout() {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  padding: 16px;
`;
