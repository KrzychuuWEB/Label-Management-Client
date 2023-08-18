import React from "react";
import {useFormik} from "formik";
import CustomDialog from "@/components/dialog";
import {nutritionalValuesValidationSchema} from "@/app/admin/nutritionalValues/components/formValid";
import AdminNutritionalValuesForm from "@/app/admin/nutritionalValues/components/form";
import {Button, DialogActions} from "@mui/material";

const AdminNutritionalValuesEditDialog = ({open, handleClose, nutritionalValue}) => {
    const formik = useFormik({
        initialValues: nutritionalValue,
        validationSchema: nutritionalValuesValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <CustomDialog
            title={`Edytuj ${nutritionalValue.name}`}
            open={open}
            handleClose={handleClose}
        >
            <AdminNutritionalValuesForm
                formik={formik}
            >
                <DialogActions>
                    <Button
                        onClick={() => handleClose(false)}
                    >
                        Anuluj
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Edytuj
                    </Button>
                </DialogActions>
            </AdminNutritionalValuesForm>
        </CustomDialog>
    );
};

export default AdminNutritionalValuesEditDialog;