"use client"

import React from "react";
import LabelInfoForm from "@/app/labels/components/labelInfoForm";

const CreateLabelStep1 = ({formik, products, companies, templates}) => {
    return (
        <LabelInfoForm
            formik={formik}
            products={products}
            templates={templates}
            companies={companies}
        />
    );
};

export default CreateLabelStep1;