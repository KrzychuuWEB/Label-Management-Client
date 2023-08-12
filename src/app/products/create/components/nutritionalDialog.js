import React from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

const NutritionalDialog = ({open, handleToggleDialog, children, actionButtons}) => {
    return (
        <Dialog
            open={open}
            onClose={() => handleToggleDialog(false)}
        >
            <DialogTitle>Tabla wartości odżywczych produktu</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                {actionButtons}
            </DialogActions>
        </Dialog>
    );
};

export default NutritionalDialog;