import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";

const InitialDeleteDialog = ({open, handleClose, initial}) => {
    const deleteInitial = () => {
        console.log("Usunięcie inciajłu");
    };

    return (
        <div>
            <CustomDialog
                open={open}
                handleClose={handleClose}
                title={`Usuń inicjał - ${initial.first_name} ${initial.last_name} (${initial.name})`}
                dialogActions={
                    <DialogActions sx={{marginTop: 2}}>
                        <Button onClick={() => handleClose(false)}>Anuluj</Button>
                        <Button onClick={deleteInitial} variant="contained" color="error">Usuń</Button>
                    </DialogActions>
                }
            >
                Czy jesteś pewny że chcesz usunąć inicjał?
            </CustomDialog>
        </div>
    );
};

export default InitialDeleteDialog;