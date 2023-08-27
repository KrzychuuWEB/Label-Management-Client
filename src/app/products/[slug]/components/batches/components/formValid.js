import * as yup from "yup";

export const batchValidationSchema = yup.object({
    batch: yup
        .string()
        .required("Numer partii nie może być pusty!"),
    date: yup
        .string()
        .required("Data do spożycia nie może być pusta!"),
    country: yup
        .string()
        .required("Kraj pochodzenia nie może być pusty!"),
    initial_id: yup
        .number()
        .required("Musisz wybrać inicjał"),
});