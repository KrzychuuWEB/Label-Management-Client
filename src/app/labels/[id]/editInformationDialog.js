import React, {useEffect, useState} from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";
import {Edit} from "@mui/icons-material";
import {useFormik} from "formik";
import {labelsValidationSchema} from "@/app/labels/components/formValid";
import LabelInfoForm from "@/app/labels/components/labelInfoForm";
import FormSkeleton from "@/components/form/formSkeleton";
import {productsTable} from "@/inMemoryDatabase/products";
import {labelTemplatesTable} from "@/inMemoryDatabase/labelTemplates";
import {companiesTable} from "@/inMemoryDatabase/companies";
import CircularProgressWithTitle from "@/components/loading/circularProgressWithTitle";

const LabelEditInformationDialog = ({open, handleClose, label}) => {
    const [products, setProducts] = useState([]);
    const [templates, setTemplates] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsTable);
            setTemplates(labelTemplatesTable);
            setCompanies(companiesTable);
            setIsLoading(false);
        }, 1500);
    }, []);

    const formik = useFormik({
        initialValues: {
            name: label.name,
            product_id: label.product_id.id,
            template_id: label.label_template_id.id,
            company_id: label.company_id.id,
        },
        enableReinitialize: true,
        validationSchema: labelsValidationSchema,
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title="Edytuj podstawowe informację o etykietcie"
        >
            <FormSkeleton
                formik={formik}
            >
                {
                    isLoading
                        ? <CircularProgressWithTitle title="Ładowanie formularza"/>
                        : <LabelInfoForm
                            formik={formik}
                            products={products}
                            companies={companies}
                            templates={templates}
                        />
                }

                <DialogActions sx={{marginTop: 1}}>
                    <Button
                        color="primary"
                        onClick={handleClose}
                    >
                        Anuluj
                    </Button>
                    <Button
                        disabled={isLoading}
                        type="submit"
                        color="primary"
                        variant="contained"
                        startIcon={<Edit/>}
                    >
                        Edytuj
                    </Button>
                </DialogActions>
            </FormSkeleton>
        </CustomDialog>
    );
};

export default LabelEditInformationDialog;