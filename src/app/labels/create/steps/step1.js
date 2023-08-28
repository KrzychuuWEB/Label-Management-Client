"use client"

import React from "react";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";

const CreateLabelStep1 = ({formik, products, companies, templates}) => {
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

            <FormControl fullWidth sx={{marginBottom: 3}}>
                <InputLabel id="select-product">Wybierz produkt</InputLabel>
                <Select
                    labelId="select-product"
                    name="product_id"
                    value={formik.values.product_id}
                    label="Wybierz produkt"
                    error={formik.touched.product_id && Boolean(formik.errors.product_id)}
                    onChange={formik.handleChange}
                >
                    {
                        products.map(product => (
                            <MenuItem key={product.id} value={product.id}>{product.name}</MenuItem>
                        ))
                    }
                </Select>
                <FormHelperText sx={{color: "red"}} color="error">
                    {formik.touched.product_id && (formik.errors.product_id)}
                </FormHelperText>
            </FormControl>

            <FormControl fullWidth sx={{marginBottom: 3}}>
                <InputLabel id="select-template">Wybierz szablon</InputLabel>
                <Select
                    labelId="select-template"
                    name="template_id"
                    value={formik.values.template_id}
                    label="Wybierz szablon"
                    error={formik.touched.template_id && Boolean(formik.errors.template_id)}
                    onChange={formik.handleChange}
                >
                    {
                        templates.map(template => (
                            <MenuItem key={template.id}
                                      value={template.id}>{template.name} ({template.width}x{template.height})</MenuItem>
                        ))
                    }
                </Select>
                <FormHelperText sx={{color: "red"}} color="error">
                    {formik.touched.template_id && (formik.errors.template_id)}
                </FormHelperText>
            </FormControl>

            <FormControl fullWidth sx={{marginBottom: 3}}>
                <InputLabel id="select-company">Wybierz firmę</InputLabel>
                <Select
                    labelId="select-company"
                    name="company_id"
                    value={formik.values.company_id}
                    label="Wybierz firmę"
                    error={formik.touched.company_id && Boolean(formik.errors.company_id)}
                    onChange={formik.handleChange}
                >
                    {
                        companies.map(company => (
                            <MenuItem key={company.id} value={company.id}>{company.name}</MenuItem>
                        ))
                    }
                </Select>
                <FormHelperText sx={{color: "red"}} color="error">
                    {formik.touched.company_id && (formik.errors.company_id)}
                </FormHelperText>
            </FormControl>
        </div>
    );
};

export default CreateLabelStep1;