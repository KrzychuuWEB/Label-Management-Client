import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";
import {Delete} from "@mui/icons-material";

const DeleteBatchDialog = ({open, handleClose, batch}) => {
    const deleteBatch = () => {
        console.log("delete batch");
    }

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title={`Usuń partię - ${batch.batch}`}
            dialogActions={<DialogActions>
                <Button
                    onClick={handleClose}
                    color="primary"
                >
                    Anuluj
                </Button>

                <Button
                    variant="contained"
                    startIcon={<Delete/>}
                    color="error"
                    onClick={deleteBatch}
                >
                    Usuń
                </Button>
            </DialogActions>}
        >
            Czy jesteś pewny/a że chcesz usunąć partię o oznaczeniu - <strong>{batch.batch}</strong>?
        </CustomDialog>
    );
};

export default DeleteBatchDialog;