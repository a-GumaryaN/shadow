import React, { FC } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logo } from "../../constants/images";
import { navbar } from "../../constants/data";
import {
  Nav,
  NavMenu,
  NavItem,
  SocialMedias,
  SocialMedia,
  Logo,
} from "./Navbar.styles";

const Navbar: FC = ({}) => {
  return (
    <Nav>
      <Logo to="/">
        <img src={logo} alt="logo" />
      </Logo>

      <NavMenu>
        {navbar.map((item) => {
          return (
            <NavItem>
              <Link to={`/${item}`}>{item}</Link>
            </NavItem>
          );
        })}

      <SocialMedias>
        <SocialMedia to="">
          <i className="fa fa-dribbble"></i>
        </SocialMedia>
        <SocialMedia to="">
          <i className="fa fa-behance"></i>
        </SocialMedia>
        <SocialMedia to="">
          <i className="fa fa-twitter"></i>
        </SocialMedia>
      </SocialMedias>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
