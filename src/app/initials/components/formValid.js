import * as yup from "yup";

export const initialValidationSchema = yup.object({
    first_name: yup
        .string()
        .required("Imię nie może być puste!"),
    last_name: yup
        .string()
        .required("Nazwisko nie może być puste!"),
    name: yup
        .string()
        .required("Nazwa nie może być pusta!"),
});