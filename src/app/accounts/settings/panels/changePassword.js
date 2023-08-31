import React from "react";
import {useFormik} from "formik";
import {changePasswordValidationSchema} from "@/app/accounts/settings/formValid/changePasswordFormValid";
import ChangePasswordForm from "@/app/accounts/settings/panels/components/changePasswordForm";

const AccountSettingsChangePasswordTabPanel = () => {
    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            repeatNewPassword: "",
        },
        validationSchema: changePasswordValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div>
            <ChangePasswordForm formik={formik}/>
        </div>
    );
};

export default AccountSettingsChangePasswordTabPanel;