import * as yup from "yup";

export const labelsValidationSchema = yup.object({
    name: yup
        .string()
        .required("Nazwa etykiety nie może być pusta!"),
    product_id: yup
        .number()
        .required("Produkt nie może być pusty!"),
    template_id: yup
        .number()
        .required("Szablon nie może być pusty!"),
    company_id: yup
        .number()
        .required("Firma nie może być pusta!"),
});