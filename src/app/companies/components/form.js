import React from "react";
import {TextField} from "@mui/material";

const CompaniesForm = ({formik, children}) => {
    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                sx={{marginBottom: 3}}
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                label="Nazwa firmy"
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && (formik.errors.name)}
            />

            <TextField
                fullWidth
                sx={{marginBottom: 3}}
                id="footer"
                value={formik.values.footer}
                onChange={formik.handleChange}
                label="Opis firmy"
                multiline
                rows={5}
                error={formik.touched.footer && Boolean(formik.errors.footer)}
                helperText={formik.touched.footer && (formik.errors.footer)}
            />

            {children}
        </form>
    );
};

export default CompaniesForm;