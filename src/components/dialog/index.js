import React from "react";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";

const CustomDialog = ({title, dialogActions, children, open, handleClose}) => {
    return (
        <Dialog
            open={open}
            onClose={() => handleClose(false)}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}

                {dialogActions}
            </DialogContent>
        </Dialog>
    );
};

export default CustomDialog;