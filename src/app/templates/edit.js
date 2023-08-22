import React from "react";
import CustomDialog from "@/components/dialog";
import {useFormik} from "formik";
import LabelTemplateForm from "@/app/templates/components/form";
import {Button, DialogActions} from "@mui/material";
import {Edit} from "@mui/icons-material";
import {LabelTemplateValidationSchema} from "@/app/templates/components/validationSchema";

const LabelTemplateEditDialog = ({open, handleClose, template}) => {
    const formik = useFormik({
        initialValues: template,
        validationSchema: LabelTemplateValidationSchema,
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title={`Edycja szablonu - ${template.name}`}
        >
            <LabelTemplateForm
                formik={formik}
            >
                <DialogActions>
                    <Button onClick={handleClose}>
                        Anuluj
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        startIcon={<Edit/>}
                    >
                        Edytuj
                    </Button>
                </DialogActions>
            </LabelTemplateForm>
        </CustomDialog>
    );
};

export default LabelTemplateEditDialog;