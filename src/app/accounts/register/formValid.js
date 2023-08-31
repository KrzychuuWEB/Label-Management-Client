import * as yup from "yup";

export const registerValidationSchema = yup.object({
    username: yup
        .string()
        .required("Nazwa uzytkownika jest wymagana"),
    email: yup
        .string()
        .email("Email jest nieprawidłowy")
        .required("Email nie może być pusty"),
    password: yup.string().required("Hasło nie może być puste")
        .oneOf([yup.ref('repeatPassword'), null], 'Hasło nie jest takie samo'),
    repeatPassword: yup.string().required("Hasło nie może być puste")
        .oneOf([yup.ref('password'), null], 'Hasło nie jest takie samo')
});