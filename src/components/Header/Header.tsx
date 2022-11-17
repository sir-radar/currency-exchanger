import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navlink from '../NavLink/NavLink';
import Icon from '../../assets/icon.svg';

function Header() {
  return (
    <NavWrapper>
      <Link to="/">
        <img src={Icon} alt="Site logo" />
      </Link>

      <NavLinks>
        <Navlink text=" EUR-USD Details" url="/" />
        <Navlink text=" EUR-GBP Details" url="/" />
      </NavLinks>
    </NavWrapper>
  );
}

export default Header;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 16px;
`;
