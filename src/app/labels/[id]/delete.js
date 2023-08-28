import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";
import {Delete} from "@mui/icons-material";

const LabelDeleteDialog = ({open, handleClose, label}) => {
    const deleteLabel = () => {
        console.log("delete label");
    };

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title={`Usuń etykiete - ${label.name}`}
            dialogActions={<DialogActions sx={{marginTop: 1}}>
                <Button
                    color="primary"
                    onClick={handleClose}
                >
                    Anuluj
                </Button>
                <Button
                    color="error"
                    variant="contained"
                    startIcon={<Delete/>}
                    onClick={deleteLabel}
                >
                    Usuń
                </Button>
            </DialogActions>}
        >
            Czy jesteś pewny/a że chcesz usunąć etykiete <strong>{label.name}</strong>?
        </CustomDialog>
    );
};

export default LabelDeleteDialog;