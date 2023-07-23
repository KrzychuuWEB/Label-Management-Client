import * as yup from "yup";

export const loginValidationSchema = yup.object({
    email: yup
        .string("Login nie może być pusty!")
        .required("Login nie może być pusty!"),
    password: yup
        .string("Hasło nie może być puste!")
        .required("Hasło nie może być puste!"),
});