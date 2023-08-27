import React from "react";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

const InitialSelectInput = ({formik, initials}) => {
    return (
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
    );
};

export default InitialSelectInput;