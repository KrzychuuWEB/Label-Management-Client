"use client"

import React from "react";
import CenterBox from "@/components/box/center";
import {useFormik} from "formik";
import {Button} from "@mui/material";
import styled from "@emotion/styled";
import AdminNutritionalValuesForm from "@/app/admin/nutritionalValues/components/form";
import {nutritionalValuesValidationSchema} from "@/app/admin/nutritionalValues/components/formValid";

const CustomButton = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));

const AdminNutritionalValuesCreatePage = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            priority: "",
        },
        validationSchema: nutritionalValuesValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div>
            <CenterBox
                title="Dodaj nową wartość odżywczą"
            >
                <AdminNutritionalValuesForm
                    formik={formik}
                >
                    <CustomButton>
                        <Button variant="contained" type="submit">
                            Dodaj
                        </Button>
                    </CustomButton>
                </AdminNutritionalValuesForm>
            </CenterBox>
        </div>
    );
};

export default AdminNutritionalValuesCreatePage;