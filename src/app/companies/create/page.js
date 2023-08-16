"use client"

import React from "react";
import {useFormik} from "formik";
import {companiesValidationSchema} from "@/app/companies/components/formValid";
import styled from "@emotion/styled";
import CenterBox from "@/components/box/center";
import {Button} from "@mui/material";
import CompaniesForm from "@/app/companies/components/form";

const Buttons = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));

const CreateCompaniesPage = () => {
    const formik = useFormik({
        initialValues: {
            company: "",
            footer: "",
        },
        validationSchema: companiesValidationSchema,
        onSubmit: values => {
            console.log(values)
        }
    });

    return (
        <CenterBox
            title="Dodaj nową firmę"
        >
            <CompaniesForm
                formik={formik}
            >
                <Buttons>
                    <Button type="submit" variant="contained">Dodaj</Button>
                </Buttons>
            </CompaniesForm>
        </CenterBox>
    );
};

export default CreateCompaniesPage;