"use client"

import React from "react";
import {useFormik} from "formik";
import {LabelTemplateValidationSchema} from "@/app/templates/components/validationSchema";
import styled from "@emotion/styled";
import {Button} from "@mui/material";
import LabelTemplateForm from "@/app/templates/components/form";
import CenterBox from "@/components/box/center";

const ActionButton = styled('div')(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
}));

const LabelTemplateCreatePage = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            width: 0,
            height: 0,
        },
        validationSchema: LabelTemplateValidationSchema,
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <CenterBox
            title="Dodaj nowy szablon"
        >
            <LabelTemplateForm
                formik={formik}
            >
                <ActionButton>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Dodaj
                    </Button>
                </ActionButton>
            </LabelTemplateForm>
        </CenterBox>
    );
};

export default LabelTemplateCreatePage;