import * as yup from "yup";

export const companiesValidationSchema = yup.object({
    name: yup
        .string()
        .required("Nazwa nie może być puste!"),
    footer: yup
        .string()
        .required("Stopka nie może być pusta!"),
});