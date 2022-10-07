import React from "react";
import PureBotton from "../../components/PureBotton/PureBotton";
import Content from "../../components/Content/Content";
import { Container, Des, Title } from "./ContactUs.styles";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Container>
      <Content className="col-center">
        <Title>Interested in working with us?</Title>
        <Des>Let's Talk Now!</Des>
        <Botton className="black" onClick={() => {}}>
          hire us now
        </Botton>
      </Content>
    </Container>
  );
};

const Botton = styled(PureBotton)`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
`;

export default ContactUs;
