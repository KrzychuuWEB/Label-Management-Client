import React from "react";
import {TextField} from "@mui/material";

const AdminNutritionalValuesForm = ({formik, children}) => {
    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                name="name"
                label="Nazwa wartości odżywczej"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && (formik.errors.name)}
            />

            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                type="number"
                name="priority"
                label="Priorytet"
                onChange={formik.handleChange}
                value={formik.values.priority}
                error={formik.touched.priority && Boolean(formik.errors.priority)}
                helperText={formik.touched.priority && (formik.errors.priority)}
            />

            {children}
        </form>
    );
};

export default AdminNutritionalValuesForm;