import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";
import {Print} from "@mui/icons-material";
import PrintLabelForm from "@/app/products/[slug]/components/labels/printLabelForm";
import {useFormik} from "formik";
import {initialSelectValidationSchema} from "@/app/products/[slug]/components/initialSelectValidationSchema";

const ProductLabelPrintDialog = ({open, handleClose, label}) => {
    const formik = useFormik({
        initialValues: {
            initial_id: "",
        },
        validationSchema: initialSelectValidationSchema,
        onSubmit: values => {
            console.log(values);
            console.log(label.id);
        },
    });

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title="Drukowanie etykiety"
        >
            <PrintLabelForm
                formik={formik}
            >
                <DialogActions sx={{marginTop: 1}}>
                    <Button
                        onClick={handleClose}
                        color="primary"
                    >
                        Anuluj
                    </Button>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        startIcon={<Print/>}
                    >
                        Drukuj
                    </Button>
                </DialogActions>
            </PrintLabelForm>
        </CustomDialog>
    );
};

export default ProductLabelPrintDialog;