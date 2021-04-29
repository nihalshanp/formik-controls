import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const FormikContainer = () => {
    const initialValues = {};
    const validationScema = Yup.object({});
    const onSubmit = (values) => console.log("Form values", values);
    return (
        <Formik
            initialValues={initialValues}
            validationScema={validationScema}
            onSubmit={onSubmit}
        >
            {(fromik) => {
                return (
                    <Form>
                        <submit type="submit">Submit</submit>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default FormikContainer;
