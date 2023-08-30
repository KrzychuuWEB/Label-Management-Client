import React from "react";
import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@mui/material";

const CustomTextField = ({formik, name, label, ...props}) => {
    return (
        <FormControl fullWidth sx={{marginBottom: 2}}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
                id={name}
                label={label}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                {...props}
            />

            <FormHelperText sx={{color: "red"}}>
                {formik.touched[name] && (formik.errors[name])}
            </FormHelperText>
        </FormControl>
    );
};

export default CustomTextField;