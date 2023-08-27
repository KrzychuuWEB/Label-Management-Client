import React from "react";
import {useFormik} from "formik";
import {batchValidationSchema} from "@/app/products/[slug]/components/batches/components/formValid";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";
import {Add} from "@mui/icons-material";
import BatchesForm from "@/app/products/[slug]/components/batches/components/form";

const CreateBatchDialog = ({open, handleClose}) => {
    const formik = useFormik({
        initialValues: {
            batch: "",
            date: "",
            country: "",
            initial_id: "",
        },
        validationSchema: batchValidationSchema,
        enableReinitialize: true,
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title="Dodaj nową partię"
        >
            <BatchesForm formik={formik}>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                    >
                        Anuluj
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={<Add/>}
                        color="primary"
                    >
                        Dodaj
                    </Button>
                </DialogActions>
            </BatchesForm>
        </CustomDialog>
    );
};

export default CreateBatchDialog;