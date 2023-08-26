"use client"

import React, {useEffect, useState} from "react";
import CenterBox from "@/components/box/center";
import {Button} from "@mui/material";
import styled from "@emotion/styled";
import {nutritionalValuesNamesTable} from "@/inMemoryDatabase/nutritionalNames";
import {useFormik} from "formik";
import {productValidateSchema} from "@/app/products/formValid";
import {
    addValueAndCheckedFieldToNutritionalValueNames,
    getSortedNutritionalValuesByPriority
} from "@/utils/nutritionalValues/nutritionalValuesFunctions";
import ProductForm from "@/app/products/components/form";

const ActionButton = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    marginRight: 5,
}));

const ProductCreatePage = () => {
    const [nutritionalValues, setNutritionalValues] = useState([]);

    useEffect(() => {
        const addValuesAndChecked = addValueAndCheckedFieldToNutritionalValueNames(nutritionalValuesNamesTable)

        setNutritionalValues(getSortedNutritionalValuesByPriority(addValuesAndChecked))
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
            <ProductForm
                formik={formik}
                nutritionalValues={nutritionalValues}
                setNutritionalValues={setNutritionalValues}
            >
                <ActionButton>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                        Dodaj
                    </Button>
                </ActionButton>
            </ProductForm>
        </CenterBox>
    );
};

export default ProductCreatePage;