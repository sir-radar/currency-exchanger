import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navlink from '../NavLink/NavLink';
import Icon from '../../assets/icon.svg';

function Header() {
  return (
    <NavWrapper data-testid="header-wrapper">
      <Link to="/">
        <img data-testid="header-logo" src={Icon} alt="Site logo" />
      </Link>

      <NavLinks>
        <Navlink text="EUR-USD Details" url="/details/EUR/USD/1" />
        <Navlink text="EUR-GBP Details" url="/details/EUR/GBP/1" />
      </NavLinks>
    </NavWrapper>
  );
}

export default Header;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  position: sticky;
  top: 16px;
  background-color: #dcdcdc;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px 6px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 16px;
`;
