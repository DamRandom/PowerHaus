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
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Only numbers allowed")
    .min(8, "Phone number must be at least 8 digits")
    .max(15, "Phone number can't be longer than 15 digits"),
});

export default validationSchema;
