import { ReactNode } from "react"
import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';
import Header from "../components/Header/Header";


interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <LayoutWrapper>
      <Header/>
       <Outlet />
    </LayoutWrapper>
  )
}

export default Layout

const LayoutWrapper = styled.div`
  padding: 16px;
`;
