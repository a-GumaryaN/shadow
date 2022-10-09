import React from "react";
import ContactUsInfo from "../../components/ContactUsInfo/ContactUsInfo";
import OrderForm from "../../components/OrderForm/OrderForm";
import { Container, Wrapped } from "./ContactUs.styled";

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


export default ContactUs;
