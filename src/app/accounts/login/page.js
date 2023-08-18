"use client"

import React from "react";
import {Button} from "@mui/material";
import LoginForm from "@/app/accounts/login/form";
import {useFormik} from "formik";
import {loginValidationSchema} from "@/app/accounts/login/formValid";
import BoxWithLogo from "@/components/box/withLogo";

const LoginPage = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <BoxWithLogo
            title="Zaloguj się"
        >
            <LoginForm
                formik={formik}
                actionButtons={(
                    <Button
                        type="submit"
                        variant="contained"
                    >
                        Zaloguj
                    </Button>
                )}
            />
        </BoxWithLogo>
    );
};

export default LoginPage;