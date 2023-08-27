import * as yup from "yup";

export const initialSelectValidationSchema = yup.object({
    initial_id: yup
        .number()
        .required("Musisz wybrać inicjał"),
});