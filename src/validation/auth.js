import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Email is required")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Enter a valid Email"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Enter a valid Password*"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Email is required")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Enter a valid Email"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Enter a valid Password*"),
});
