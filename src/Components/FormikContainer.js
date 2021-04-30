import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
  };
  const validationScema = Yup.object({
    email: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log("Form values", values);
  return (
    <Formik
      initialValues={initialValues}
      validationScema={validationScema}
      onSubmit={onSubmit}
    >
      {(fromik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            lable="Email"
            name="email"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
