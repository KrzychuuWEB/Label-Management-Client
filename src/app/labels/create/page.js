"use client"

import React from "react";
import {Button, Paper, Step, StepLabel, Stepper} from "@mui/material";
import styled from "@emotion/styled";
import CreateLabelStep2 from "@/app/labels/create/steps/step2";
import CreateLabelStep1 from "@/app/labels/create/steps/step1";

const steps = [
    "Podstawowe informacje",
    "Podstawowe informacje - 2",
    "Podstawowe informacje - 3",
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
    const [activeStep, setActiveStep] = React.useState(1);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div>
            <CustomPaper>
                <Stepper activeStep={activeStep} alternativeLabel sx={{marginBottom: 8}}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {
                    activeStep === 0 && <CreateLabelStep1/>
                }

                {
                    activeStep === 1 && <CreateLabelStep2/>
                }

                {
                    activeStep === 2 && (<div>3</div>)
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
                        activeStep <= (steps.length - 1) && (
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
                        activeStep >= steps.length && (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                Wyślij
                            </Button>
                        )
                    }
                </CustomButtons>
            </CustomPaper>
        </div>
    );
};

export default CreateLabelPage;