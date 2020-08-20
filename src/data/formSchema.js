import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
    .string()
    .required("Please enter a username."),
    password: Yup
    .string()
    .required("Please enter a password."),
    email: Yup
    .string()
    .required("Please enter an email address.")
    .email("Email address not properly formatted."),
    readTOS: Yup
    .boolean()
    .oneOf([true], "Please accept the terms of service."),
});

export default formSchema;