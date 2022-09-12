import React, { FC, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logo } from "../../constants/images";
import { navbar } from "../../constants/data";
import { useInView } from "react-intersection-observer";
import {
  Header,
  Logo,
  NavItem,
  SocialMedia,
  Container,
  VerNavMenu,
  HorNavMenu,
  BurgerButton,
} from "./Navbar.styles";

const Navbar: FC = ({}) => {
  const [verticalNav, showVertcalNav] = useState(false);

  const { inView, ref } = useInView({ threshold: 1 });

  return (
    <Header style={{ position: inView ? "fixed" : "sticky" }} ref={ref}>
      <Container>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        <nav>
          <HorNavMenu>
            {navbar.map((item) => {
              return (
                <NavItem key={item.title}>
                  <Link to={`/${item.link}`}>{item.title}</Link>
                </NavItem>
              );
            })}

            <SocialMedia>
              <Link to="/">
                <i className="fa fa-dribbble"></i>
              </Link>
            </SocialMedia>
            <SocialMedia>
              <Link to="/">
                <i className="fa fa-behance"></i>
              </Link>
            </SocialMedia>
            <SocialMedia>
              <Link to="/">
                <i className="fa fa-twitter"></i>
              </Link>
            </SocialMedia>
          </HorNavMenu>
        </nav>
        <BurgerButton onClick={() => showVertcalNav(!verticalNav)}>
          <i className="fa fa-bars"></i>
        </BurgerButton>
      </Container>

      <VerNavMenu
        style={{
          display: verticalNav ? "flex" : "none",
        }}
      >
        {navbar.map((item) => {
          return (
            <li key={item.title}>
              <Link to={`/${item.link}`}>{item.title}</Link>
            </li>
          );
        })}
      </VerNavMenu>
    </Header>
  );
};

export default Navbar;
