import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";
import {Edit} from "@mui/icons-material";
import {useFormik} from "formik";
import {batchValidationSchema} from "@/app/products/[slug]/components/batches/components/formValid";
import BatchesForm from "@/app/products/[slug]/components/batches/components/form";

const EditBatchDialog = ({open, handleClose, batch}) => {
    const formik = useFormik({
        initialValues: {
            batch: batch.batch,
            date: batch.date,
            country: batch.country,
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
            title={`Edytuj partię - ${batch.batch}`}
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
                        startIcon={<Edit/>}
                        color="primary"
                    >
                        Edytuj
                    </Button>
                </DialogActions>
            </BatchesForm>
        </CustomDialog>
    );
};

export default EditBatchDialog;