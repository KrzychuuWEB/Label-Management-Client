import * as yup from "yup";

export const accountInformationValidationSchema = yup.object({
    username: yup
        .string()
        .required("Nazwa użytkownika / firmy nie może być pusta"),
    email: yup
        .string()
        .email("Email jest nieprawidłowy")
        .required("Email nie może być pusty"),
});