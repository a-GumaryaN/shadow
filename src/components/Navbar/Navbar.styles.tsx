import { Link } from "react-router-dom";
import styled from "styled-components";
export const Header = styled.header`
  width: 100%;
  position: sticky;
  padding: 14px 120px;
  background-color: white;
  @media only screen and (max-width: 992px) {
    padding: 14px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const Logo = styled(Link)`
  width: 140px;
  & > img {
    width: 100%;
  }
`;

export const HorNavMenu = styled.ul`
  display: flex;
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const VerNavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  & > li {
    margin: 20px 0;
  }

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0 20px;

  & > a {
    color: black;
  }

  &:hover& > a {
    color: #858585;
  }
`;
export const SocialMedia = styled.li`
  margin: 0 12px;
  &:hover& > a > i {
    color: #858585;
  }
`;

export const BurgerButton = styled.button`
  border: 0;
  background-color: white;
  @media only screen and (min-width: 992px) {
    display: none;
  }

  & > i {
    color: black;
    font-size: 30px;
  }
`;
