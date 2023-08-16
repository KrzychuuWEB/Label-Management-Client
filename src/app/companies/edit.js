import React from "react";
import CustomDialog from "@/components/dialog";
import CompaniesForm from "@/app/companies/components/form";
import {useFormik} from "formik";
import {companiesValidationSchema} from "@/app/companies/components/formValid";
import {Button, DialogActions} from "@mui/material";

const CompaniesEditPage = ({open, handleClose, company}) => {
    const formik = useFormik({
        initialValues: company,
        validationSchema: companiesValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div>
            <CustomDialog
                title={`Edytuj firme - ${company.name}`}
                handleClose={handleClose}
                open={open}
            >
                <CompaniesForm
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
                        >
                            Edytuj
                        </Button>
                    </DialogActions>
                </CompaniesForm>
            </CustomDialog>
        </div>
    );
};

export default CompaniesEditPage;