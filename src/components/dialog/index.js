import React from "react";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import styled from "@emotion/styled";

const CustomDiv = styled('div')(() => ({
    marginTop: 15,
}));

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
                <CustomDiv>
                    {children}
                </CustomDiv>

                {dialogActions}
            </DialogContent>
        </Dialog>
    );
};

export default CustomDialog;