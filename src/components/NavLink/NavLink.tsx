import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

interface NavLinkProps {
  text: string;
  url: string;
}

const Navlink = ({text, url}: NavLinkProps) => {

  return (
    <LinkBtn>
      <Link to={url}>
        {text}
      </Link>
    </LinkBtn>
  )
}

export default Navlink

const LinkBtn = styled.button`
  background: transparent;
  border: 1px solid;
  border-radius: 2px;
  padding: 8px;
`;
