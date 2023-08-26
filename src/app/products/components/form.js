import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import NutritionalDialog from "@/app/products/components/nutritionalDialog";
import NutritionalTableForForm from "@/app/products/components/nutritionalTable";

const ProductForm = ({formik, children, nutritionalValues, setNutritionalValues}) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleToggleDialog = (open) => {
        setOpenDialog(open);
    }

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                sx={{marginBottom: 3}}
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                label="Nazwa produktu"
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && (formik.errors.name)}
            />
            <TextField
                fullWidth
                id="description"
                sx={{marginBottom: 3}}
                value={formik.values.description}
                onChange={formik.handleChange}
                label="Opis produktu"
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && (formik.errors.description)}
            />
            <TextField
                fullWidth
                id="composition"
                sx={{marginBottom: 3}}
                value={formik.values.composition}
                onChange={formik.handleChange}
                label="Skład produktu"
                error={formik.touched.composition && Boolean(formik.errors.composition)}
                helperText={formik.touched.composition && (formik.errors.composition)}
            />

            <Button
                variant={formik.errors.nutritionalValues ? "contained" : "outlined"}
                onClick={() => handleToggleDialog(true)}
                sx={{marginBottom: 3}}
                color={formik.errors.nutritionalValues ? "error" : "primary"}
            >
                Pokaż tabele wartości odżywczych
            </Button>

            {children}

            <NutritionalDialog
                open={openDialog}
                handleToggleDialog={handleToggleDialog}
                actionButtons={(
                    <Button
                        onClick={() => handleToggleDialog(false)}
                    >
                        Dodaj
                    </Button>
                )}
            >
                <NutritionalTableForForm
                    formik={formik}
                    nutritionalValues={nutritionalValues}
                    setNutritionalValues={setNutritionalValues}
                />
            </NutritionalDialog>
        </form>
    );
};

export default ProductForm;