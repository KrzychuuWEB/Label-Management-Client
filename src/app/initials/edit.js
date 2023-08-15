import React from "react";
import CustomDialog from "@/components/dialog";
import InitialForm from "@/app/initials/components/form";
import {Button, DialogActions} from "@mui/material";
import {useFormik} from "formik";
import {initialValidationSchema} from "@/app/initials/components/formValid";

const InitialEditDialog = ({open, handleClose, initial}) => {
    const formik = useFormik({
        initialValues: initial,
        validationSchema: initialValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <div>
            <CustomDialog
                open={open}
                handleClose={handleClose}
                title="Edytuj inicjał"
            >
                <InitialForm
                    formik={formik}
                    actionButton={
                        <DialogActions sx={{marginTop: 1}}>
                            <Button onClick={() => handleClose(false)}>Anuluj</Button>
                            <Button type="submit" variant="contained">Edytuj</Button>
                        </DialogActions>
                    }/>
            </CustomDialog>
        </div>
    );
};

export default InitialEditDialog;