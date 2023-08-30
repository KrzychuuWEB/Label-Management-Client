import React from "react";
import {MenuItem, TextField} from "@mui/material";
import SelectField from "@/components/form/selectField";

const LabelInfoForm = ({formik, products, templates, companies}) => {
    return (
        <div>
            <TextField
                label="Nazwa etykiety"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                fullWidth
                sx={{marginBottom: 3}}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && (formik.errors.name)}
            />

            <SelectField
                label="Wybierz produkt"
                name="product_id"
                formik={formik}
            >
                {
                    products.map(product => (
                        <MenuItem key={product.id} value={product.id}>{product.name}</MenuItem>
                    ))
                }
            </SelectField>

            <SelectField
                label="Wybierz szablon"
                name="template_id"
                formik={formik}
            >
                {
                    templates.map(template => (
                        <MenuItem key={template.id}
                                  value={template.id}>{template.name} ({template.width}x{template.height})</MenuItem>
                    ))
                }
            </SelectField>

            <SelectField
                label="Wybierz firmę"
                name="company_id"
                formik={formik}
            >
                {
                    companies.map(company => (
                        <MenuItem key={company.id} value={company.id}>{company.name}</MenuItem>
                    ))
                }
            </SelectField>
        </div>
    );
};

export default LabelInfoForm;