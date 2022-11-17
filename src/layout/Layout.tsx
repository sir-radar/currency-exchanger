import { ReactNode } from "react"
import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';


interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <LayoutWrapper>
      Layout
       <Outlet />
    </LayoutWrapper>
  )
}

export default Layout

const LayoutWrapper = styled.div``;
