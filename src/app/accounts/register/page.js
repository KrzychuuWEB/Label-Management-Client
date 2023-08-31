"use client"

import React from "react";
import BoxWithLogo from "@/components/box/withLogo";
import {useFormik} from "formik";
import {registerValidationSchema} from "@/app/accounts/register/formValid";
import RegisterForm from "@/app/accounts/register/form";

const AccountRegisterPage = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <BoxWithLogo
            title="Zarejestruj się"
        >
            <RegisterForm
                formik={formik}
            />
        </BoxWithLogo>
    );
};

export default AccountRegisterPage;