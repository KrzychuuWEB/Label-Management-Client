import * as yup from "yup";

export const changePasswordValidationSchema = yup.object({
    oldPassword: yup
        .string()
        .required("Hasło nie może być puste"),
    newPassword: yup.string().required("Hasło nie może być puste")
        .oneOf([yup.ref('repeatNewPassword'), null], 'Hasło nie jest takie samo'),
    repeatNewPassword: yup.string().required("Hasło nie może być puste")
        .oneOf([yup.ref('newPassword'), null], 'Hasło nie jest takie samo')
});