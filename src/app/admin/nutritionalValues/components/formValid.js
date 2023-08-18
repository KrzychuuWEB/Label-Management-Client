import * as yup from "yup";

export const nutritionalValuesValidationSchema = yup.object({
    name: yup
        .string("Nazwa wartości odżywczej musi zawierać znaki!")
        .required("Pole nie może być puste!"),
    priority: yup
        .number("Priorytet musi być numerem")
        .required("Pole nie może być puste!"),
});