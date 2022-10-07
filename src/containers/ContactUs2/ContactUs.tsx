import React from "react";
import styled from "styled-components";
import ContactUsInfo from "../../components/ContactUsInfo/ContactUsInfo";
import OrderForm from "../../components/OrderForm/OrderForm";

const ContactUs = () => {
  return (
    <Container>
      <Wrapped className="wrapped">
        <ContactUsInfo />

        <OrderForm />
      </Wrapped>
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 10px;
`;

const Wrapped = styled.div`
  max-width: 1200px;
  display: flex;
`;

export default ContactUs;
