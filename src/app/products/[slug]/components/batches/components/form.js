import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {initialsTable} from "@/inMemoryDatabase/initials";
import InitialSelectInput from "@/app/products/[slug]/components/initialSelectInput";

const BatchesForm = ({formik, children}) => {
    const [initials, setInitials] = useState([]);

    useEffect(() => {
        setInitials(initialsTable);
    }, []);

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                name="batch"
                label="Numer partii"
                onChange={formik.handleChange}
                value={formik.values.batch}
                error={formik.touched.batch && Boolean(formik.errors.batch)}
                helperText={formik.touched.batch && (formik.errors.batch)}
            />

            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                name="date"
                label="Data spożycia"
                onChange={formik.handleChange}
                value={formik.values.date}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && (formik.errors.date)}
            />

            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                name="country"
                label="Kraj pochodzenia"
                onChange={formik.handleChange}
                value={formik.values.country}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && (formik.errors.country)}
            />

            <InitialSelectInput
                formik={formik}
                initials={initials}
            />

            {children}
        </form>
    );
};

export default BatchesForm;