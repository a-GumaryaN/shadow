import React from "react";
import { Container, Content, CopyRight, SocialMedias } from "./Footer.styles";
import logo from "../../constants/images/logo";
import { Link } from "react-router-dom";
import { footer } from "../../constants/data";
import { Title, FooterLogo } from "./Footer.styles";

const Footer = () => {
  return (
    <Container>
      <Content>
        <FooterLogo src={logo.logoFooter} />
        <Title>Creative Digital Media</Title>

        <SocialMedias>
          {footer.socialMedias.map(({ icon, id, link }) => {
            return (
              <li key={id}>
                <Link to={link}>
                  <i className={icon}></i>
                </Link>
              </li>
            );
          })}
        </SocialMedias>

        <CopyRight>Copy right</CopyRight>
      </Content>
    </Container>
  );
};

export default Footer;
