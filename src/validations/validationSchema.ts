import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "Only letters allowed"),
  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Only letters allowed"),
  address: yup.string().required("Address is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
});

export default validationSchema;
