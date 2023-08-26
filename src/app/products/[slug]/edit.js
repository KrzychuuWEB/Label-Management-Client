import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";
import {useFormik} from "formik";
import {productValidateSchema} from "@/app/products/formValid";
import {getCheckedNutritionalValues} from "@/utils/nutritionalValues/nutritionalValuesFunctions";
import ProductForm from "@/app/products/components/form";

const ProductEditDialog = ({open, handleClose, product, nutritionalValues, setNutritionalValues}) => {
    const formik = useFormik({
        initialValues: {
            name: product.name,
            description: product.description,
            composition: product.composition,
            nutritionalValues: nutritionalValues,
        },
        enableReinitialize: true,
        validationSchema: productValidateSchema,
        onSubmit: values => {
            console.log(getCheckedNutritionalValues(nutritionalValues, values));
            console.log(nutritionalValues);
        },
    });

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title={`Edycja produktu - ${product.name}`}
        >
            <ProductForm formik={formik} nutritionalValues={nutritionalValues}
                         setNutritionalValues={setNutritionalValues}>
                <DialogActions>
                    <Button
                        color="primary"
                        onClick={handleClose}
                    >
                        Anuluj
                    </Button>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                        Edytuj
                    </Button>
                </DialogActions>
            </ProductForm>
        </CustomDialog>
    );
};

export default ProductEditDialog;