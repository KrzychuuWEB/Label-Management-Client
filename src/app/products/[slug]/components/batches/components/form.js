import React, {useEffect, useState} from "react";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {initialsTable} from "@/inMemoryDatabase/initials";

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

            <FormControl fullWidth sx={{marginBottom: 2}}>
                <InputLabel id="select-initial">Inicjał</InputLabel>
                <Select
                    labelId="select-initial"
                    name="initial_id"
                    value={formik.values.initial_id}
                    label="Inicjał"
                    error={formik.touched.initial_id && Boolean(formik.errors.initial_id)}
                    onChange={formik.handleChange}
                >
                    {
                        initials.map(initial => (
                            <MenuItem key={initial.id} value={initial.id}>{initial.name}</MenuItem>
                        ))
                    }
                </Select>
                <FormHelperText sx={{color: "red"}} color="error">
                    {formik.touched.initial_id && (formik.errors.initial_id)}
                </FormHelperText>
            </FormControl>

            {children}
        </form>
    );
};

export default BatchesForm;