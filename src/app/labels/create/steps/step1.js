import React from "react";
import {useFormik} from "formik";
import {Button, TextField} from "@mui/material";

const CreateLabelStep1 = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            size: 0,
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField label="Nazwa" name="name" value={formik.values.name} onChange={formik.handleChange} fullWidth sx={{marginBottom: 5}}/>
                <TextField label="Wymiary" name="size" value={formik.values.size} onChange={formik.handleChange} fullWidth/>
                <Button type="submit">Dodaj</Button>
            </form>
        </div>
    );
};

export default CreateLabelStep1;