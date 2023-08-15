import * as yup from "yup";

export const initialValidationSchema = yup.object({
    first_name: yup
        .string("Imię musi zawierać znaki!")
        .required("Pole nie może być puste!"),
    last_name: yup
        .string("Nazwisko musi zawierać znaki!")
        .required("Pole nie może być puste!"),
    name: yup
        .string("Nazwa inicjału musi zawierać znaki!")
        .required("Pole nie może być puste!"),
});