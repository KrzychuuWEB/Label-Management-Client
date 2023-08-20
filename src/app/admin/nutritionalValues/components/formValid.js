import * as yup from "yup";

export const nutritionalValuesValidationSchema = yup.object({
    name: yup
        .string()
        .required("Nazwa wartości nie może być pusta!"),
    priority: yup
        .number()
        .required("Priorytet nie może być pusty!"),
});