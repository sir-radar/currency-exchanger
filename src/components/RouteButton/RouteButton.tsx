import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface RouteButtonProps {
  text: string;
  url: string;
}

function RouteButton({ text, url }: RouteButtonProps) {
  return (
    <LinkBtn>
      <Link to={url}>{text}</Link>
    </LinkBtn>
  );
}

export default RouteButton;

const LinkBtn = styled.button`
  background: blue;
  text-align: center;
  padding: 12px 72px;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 2px;
`;
