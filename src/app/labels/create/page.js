"use client"

import React, {useEffect, useState} from "react";
import {Button, Paper, Step, StepLabel, Stepper} from "@mui/material";
import styled from "@emotion/styled";
import CreateLabelStep2 from "@/app/labels/create/steps/step2";
import CreateLabelStep1 from "@/app/labels/create/steps/step1";
import {productsTable} from "@/inMemoryDatabase/products";
import {useFormik} from "formik";
import CircularProgressWithTitle from "@/components/loading/circularProgressWithTitle";
import {labelTemplatesTable} from "@/inMemoryDatabase/labelTemplates";
import {companiesTable} from "@/inMemoryDatabase/companies";
import {labelsValidationSchema} from "@/app/labels/create/components/formValid";

const steps = [
    "Informacje o etykiecie",
    "Wygląd etykiety",
];

const CustomPaper = styled(Paper)(() => ({
    padding: 35,
}));

const CustomButtons = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 0,

    "button": {
        marginRight: 15
    },
}));

const CreateLabelPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [templates, setTemplates] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [labelTextContent, setLabelTextContent] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsTable);
            setTemplates(labelTemplatesTable);
            setCompanies(companiesTable);
            setIsLoading(false);
        }, 2500);
    }, []);

    const formik = useFormik({
        initialValues: {
            name: "",
            product_id: "",
            template_id: "",
            company_id: "",
        },
        validationSchema: labelsValidationSchema,
        onSubmit: (values) => {
            console.log(labelTextContent);
            console.log(values);
        },
    });

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    return (
        <div>
            <CustomPaper>
                <Stepper activeStep={activeStep} alternativeLabel sx={{marginBottom: 8}}>
                    {steps.map((step, index) => (
                        <Step key={step}>
                            <StepLabel error={index === 0 && !formik.isValid}>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {
                    isLoading
                        ? <CircularProgressWithTitle title="Wczytywanie formularza" marginTop={100}/>
                        : <form autoComplete="off" onSubmit={formik.handleSubmit}>
                            {
                                activeStep === 0 && <CreateLabelStep1
                                    formik={formik}
                                    products={products}
                                    templates={templates}
                                    companies={companies}
                                />
                            }

                            {
                                activeStep === 1 && <CreateLabelStep2 labelTextContent={labelTextContent}
                                                                      setLabelTextContent={setLabelTextContent}/>
                            }

                            <CustomButtons>
                                {
                                    activeStep > 0 && (
                                        <Button
                                            variant="text"
                                            color="primary"
                                            onClick={handleBack}
                                        >
                                            Wróć
                                        </Button>
                                    )
                                }

                                {
                                    activeStep < (steps.length - 1) && (
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={handleNext}
                                        >
                                            Dalej
                                        </Button>
                                    )
                                }

                                {
                                    activeStep >= (steps.length - 1) && (
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Wyślij
                                        </Button>
                                    )
                                }
                            </CustomButtons>
                        </form>
                }
            </CustomPaper>
        </div>
    );
};

export default CreateLabelPage;