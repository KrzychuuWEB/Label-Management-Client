import * as yup from "yup";

export const productValidateSchema = yup.object({
    name: yup
        .string()
        .required("Nazwa nie może być pusta!"),
    description: yup
        .string()
        .required("Opis nie może być pusty!"),
    composition: yup
        .string()
        .required("Skład nie może być pusty!"),
    nutritionalValues: yup.array()
        .of(yup.object().shape({
            checked: yup.boolean(),
            value: yup.string().when('checked', {
                is: true,
                then: () => yup.string().required("Wartość nie może być pusta!"),
            })
        }))
});