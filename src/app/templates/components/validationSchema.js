import * as yup from "yup";

export const LabelTemplateValidationSchema = yup.object({
    name: yup
        .string()
        .required("Nazwa szablonu nie może być pusta!"),
    width: yup
        .number()
        .test(
            'Is positive?',
            'Szerokość musi być więszka od 0!',
            (value) => value > 0,
        )
        .required("Szerokość nie może być pusta!"),
    height: yup
        .number()
        .test(
            'Is positive?',
            'Wyokość musi być więszka od 0!',
            (value) => value > 0,
        )
        .required("Wysokość nie może być pusta!"),
});