import React from "react";
import Button from "../../components/Button/Button";
import Content from "../../components/Content/Content";
import { Container, Des, Title } from "./ContactUs.styles";

const ContactUs = () => {
  return (
    <Container>
      <Content className="col-center">
        <Title>
        Interested in working with us?
        </Title>
        <Des>
        Let's Talk Now!
        </Des>
        <Button
          styles={{
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "3px",
          }}
          className="black"
          onClick={() => {}}
        >
          hire us now
        </Button>
      </Content>
    </Container>
  );
};

export default ContactUs;
