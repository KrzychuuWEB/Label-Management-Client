import React from "react";
import {FormControl, FormHelperText, InputLabel, Select} from "@mui/material";

const SelectField = ({formik, label, name, children, ...props}) => {
    return (
        <FormControl fullWidth sx={{marginBottom: 2}}>
            <InputLabel htmlFor={`select-${name}`}>{label}</InputLabel>
            <Select
                id={`select-${name}`}
                name={name}
                label={label}
                value={formik.values[name]}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                onChange={formik.handleChange}
                {...props}
            >
                {children}
            </Select>
            <FormHelperText sx={{color: "red"}}>
                {formik.touched[name] && (formik.errors[name])}
            </FormHelperText>
        </FormControl>
    );
};

export default SelectField;