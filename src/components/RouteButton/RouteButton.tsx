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
  margin-top: 8px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    margin-top: 0;
    width: auto;
  }
`;
