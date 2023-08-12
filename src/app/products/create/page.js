"use client"

import React, {useEffect, useState} from "react";
import CenterBox from "@/components/box/center";
import {Button, TextField} from "@mui/material";
import styled from "@emotion/styled";
import {nutritionalValuesNamesTable} from "@/inMemoryDatabase/nutritionalNames";
import {useFormik} from "formik";
import NutritionalTable from "@/app/products/create/components/nutritionalTable";
import NutritionalDialog from "@/app/products/create/components/nutritionalDialog";
import {productValidateSchema} from "@/app/products/formValid";

const ActionButton = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    marginRight: 5,
}));

const ProductCreatePage = () => {
    const [nutritionalValues, setNutritionalValues] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);

    const handleToggleDialog = (open) => {
        setOpenDialog(open);
    }

    useEffect(() => {
        const addValueProperty = nutritionalValuesNamesTable;

        addValueProperty.map(item => {
            item.value = "";
            item.checked = false;
        })
        setNutritionalValues(addValueProperty);
    }, []);

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            composition: "",
            nutritionalValues: nutritionalValues,
        },
        enableReinitialize: true,
        validationSchema: productValidateSchema,
        onSubmit: (values) => {

            let usedNutritionalValuesArray = [];

            nutritionalValues.map((item) => {
                if (item.checked) {
                    values.nutritionalValues.map((value) => {
                        if (value.id === item.id) {
                            usedNutritionalValuesArray.push(value);
                        }
                    });
                }
            });

            console.log(usedNutritionalValuesArray);
            console.log(values);
        }
    });

    return (
        <CenterBox
            title="Dodaj nowy produkt"
        >
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    sx={{marginBottom: 3}}
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    label="Nazwa produktu"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && (formik.errors.name)}
                />
                <TextField
                    fullWidth
                    id="description"
                    sx={{marginBottom: 3}}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    label="Opis produktu"
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && (formik.errors.description)}
                />
                <TextField
                    fullWidth
                    id="composition"
                    sx={{marginBottom: 3}}
                    value={formik.values.composition}
                    onChange={formik.handleChange}
                    label="Skład produktu"
                    error={formik.touched.composition && Boolean(formik.errors.composition)}
                    helperText={formik.touched.composition && (formik.errors.composition)}
                />

                <Button
                    color="primary"
                    variant="outlined"
                    onClick={() => handleToggleDialog(true)}
                    sx={{marginBottom: 3}}
                >
                    Pokaż tabele wartości odżywczych
                </Button>

                <ActionButton>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Dodaj produkt
                    </Button>
                </ActionButton>

                <NutritionalDialog
                    open={openDialog}
                    handleToggleDialog={handleToggleDialog}
                    actionButtons={(
                        <Button
                            onClick={() => handleToggleDialog(false)}
                        >
                            Dodaj
                        </Button>
                    )}
                >
                    <NutritionalTable
                        formik={formik}
                        nutritionalValues={nutritionalValues}
                        setNutritionalValues={setNutritionalValues}
                    />
                </NutritionalDialog>
            </form>
        </CenterBox>
    );
};

export default ProductCreatePage;