import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Botton,
  Error,
  FormContainer,
  InutBox,
  MessageBox,
  PureInput,
  Title,
} from "./OrderForm.styles";

const OrderForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",

      address: "",

      subject: "",

      message: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string()

        .max(45, "fullname must be 45 characters or less")
        .required("Please fill out this field."),

      address: Yup.string().required("Please fill out this field."),

      subject: Yup.string().required("Please fill out this field."),

      message: Yup.string().max(400),
    }),

    onSubmit: (values) => {
      alert(values);
    },
  });

  return (
    <div>
      <Title>start a project</Title>
      <FormContainer onSubmit={formik.handleSubmit}>
        <InutBox>
          <PureInput
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            type="text"
            id="fullName"
            placeholder="Full Name..."
          />
          {formik.errors.fullName && <Error>{formik.errors.fullName}</Error>}
        </InutBox>

        <InutBox>
          <PureInput
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            type="text"
            id="address"
            placeholder="Enter Address..."
          />
          {formik.errors.address && <Error>{formik.errors.address}</Error>}
        </InutBox>

        <InutBox>
          <PureInput
            name="subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            type="text"
            id="subject"
            placeholder="Subject..."
          />
          {formik.errors.subject && <Error>{formik.errors.subject}</Error>}
        </InutBox>

        <MessageBox
          cols={30}
          rows={7}
          placeholder="Write message..."
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          id="message"
        ></MessageBox>
        {formik.errors.message && <Error>{formik.errors.message}</Error>}

        <Botton>send message</Botton>
      </FormContainer>
    </div>
  );
};

export default OrderForm;
