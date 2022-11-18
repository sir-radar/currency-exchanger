import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface RouteButtonProps {
  text: string;
  url: string;
}

function RouteButton({ text, url }: RouteButtonProps) {
  return (
    <Link to={url}>
      <LinkBtn>{text}</LinkBtn>
    </Link>
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
