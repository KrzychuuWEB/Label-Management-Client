import * as yup from "yup";

export const loginValidationSchema = yup.object({
    email: yup
        .string()
        .required("Email nie może być pusty!"),
    password: yup
        .string()
        .required("Hasło nie może być puste!"),
});