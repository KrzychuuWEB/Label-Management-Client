import React from "react";
import {TextField} from "@mui/material";

const InitialForm = ({formik, actionButton}) => {
    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                name="first_name"
                label="Imię"
                onChange={formik.handleChange}
                value={formik.values.first_name}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && (formik.errors.first_name)}
            />
            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                name="last_name"
                label="Nazwisko"
                onChange={formik.handleChange}
                value={formik.values.last_name}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && (formik.errors.last_name)}
            />
            <TextField
                fullWidth
                name="name"
                label="Inicjał"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && (formik.errors.name)}
            />

            {actionButton}
        </form>
    );
};

export default InitialForm;