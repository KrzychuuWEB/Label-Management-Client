import * as yup from "yup";

export const AccountLockValidationSchema = yup.object({
    time: yup
        .number()
        .required("Czas nie może być pusty!"),
    reason: yup
        .string()
        .required("Powód zablokowania nie może być pusty!"),
});