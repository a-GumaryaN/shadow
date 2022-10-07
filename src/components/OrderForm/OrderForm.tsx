import React from "react";
import styled from "styled-components";
import PureTitle from "../PureTitle/PureTitle";
import { Formik, Form, useField, useFormik } from "formik";
import * as Yup from "yup";

const OrderForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",

      email: "",

      message: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()

        .max(45, "fullname must be 45 characters or less")

        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),

      message: Yup.string().max(
        400,
        "message shold be 400 45 characters or less"
      ),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Title>start a project</Title>
      <form>
        <InutBox>
          <PureInput placeholder="Full Name..." />
          <p></p>
        </InutBox>
        <InutBox>
          <PureInput placeholder="Enter Address..." />
          <p></p>
        </InutBox>

        <InutBox>
          <PureInput placeholder="Subject..." />
          <p></p>
        </InutBox>
        
        <textarea placeholder="Write message" name="" id="" ></textarea>



      </form>
    </div>
  );
};

const Title = styled(PureTitle)`
  margin-bottom: 30px;
`;

const PureInput = styled.input`
  border-color: #eee;
  /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); */

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.075); 
  width: 100%;
  padding: 10px;
`;

const InutBox = styled.div`
  width: 100%;
`;

export default OrderForm;
