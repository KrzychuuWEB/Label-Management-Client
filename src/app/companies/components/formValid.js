import * as yup from "yup";

export const companiesValidationSchema = yup.object({
    name: yup
        .string("Nazwa firmy musi zawierać znaki!")
        .required("Pole nie może być puste!"),
    footer: yup
        .string("Stopka musi zawierać znaki!")
        .required("Pole nie może być puste!"),
});