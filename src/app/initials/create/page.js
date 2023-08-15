"use client"

import React from "react";
import CenterBox from "@/components/box/center";
import {useFormik} from "formik";
import {Button} from "@mui/material";
import styled from "@emotion/styled";
import InitialForm from "@/app/initials/components/form";
import {initialValidationSchema} from "@/app/initials/components/formValid";

const CustomButton = styled("div")(() => ({
    marginTop: 20,
    marginRight: 5,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));

const CreateInitialPage = () => {
    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            name: "",
        },
        validationSchema: initialValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div>
            <CenterBox
                title="Dodaj inicjały"
            >
                <InitialForm
                    formik={formik}
                    actionButton={
                        <CustomButton>
                            <Button type="submit" variant="contained">
                                Dodaj
                            </Button>
                        </CustomButton>
                    }
                />
            </CenterBox>
        </div>
    );
};

export default CreateInitialPage;