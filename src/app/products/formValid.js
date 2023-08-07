import * as yup from "yup";

export const productValidateSchema = yup.object({
    name: yup
        .string("Nazwa musi zawierać znaki!")
        .required("Pole nie może być puste!"),
    description: yup
        .string("Opis musi zawierać znaki!")
        .required("Pole nie może być puste!"),
    composition: yup
        .string("Skład musi zawierać znaki!")
        .required("Pole nie może być puste!"),
    nutritionalValues: yup.array()
        .of(yup.object().shape({
            checked: yup.boolean(),
            value: yup.string().when('checked', {
                is: true,
                then: () => yup.string("").required("Pole nie może być puste!"),
            })
        }))
});