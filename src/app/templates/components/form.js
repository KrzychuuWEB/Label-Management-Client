import React from "react";
import {TextField} from "@mui/material";

const LabelTemplateForm = ({formik, children}) => {
    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                name="name"
                label="Nazwa szablonu"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && (formik.errors.name)}
            />

            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                name="width"
                label="Szerokość"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.width}
                error={formik.touched.width && Boolean(formik.errors.width)}
                helperText={formik.touched.width && (formik.errors.width)}
            />

            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                name="height"
                label="Wysokość"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.height}
                error={formik.touched.height && Boolean(formik.errors.height)}
                helperText={formik.touched.height && (formik.errors.height)}
            />

            {children}
        </form>
    );
};

export default LabelTemplateForm;