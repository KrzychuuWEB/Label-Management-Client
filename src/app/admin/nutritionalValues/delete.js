import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";

const AdminNutritionalValuesDeleteDialog = ({open, handleClose, nutritionalValue}) => {
    const deleteNutritionalValue = () => {
        console.log("delete");
    }

    return (
        <CustomDialog
            title="Usuń wartość odżywczą"
            open={open}
            handleClose={handleClose}
            dialogActions={<DialogActions>
                <Button
                    onClick={() => handleClose(false)}
                >
                    Anuluj
                </Button>
                <Button
                    onClick={() => deleteNutritionalValue()}
                    variant="contained"
                    color="error"
                >
                    Usuń
                </Button>
            </DialogActions>}
        >
            Czy jesteś pewny/a że chcesz usunąć <strong>{nutritionalValue.name}</strong> z
            piorytetem <strong>{nutritionalValue.priority}</strong>?<br/>
            <i><u>Jeżeli usuniesz wartość odżywczą wszystkie etykiety które używają danej wartości zostaną automatycznie
                zmodyfikowane i wartość odżywcza nie będzie już widoczna!</u></i>
        </CustomDialog>
    );
};

export default AdminNutritionalValuesDeleteDialog;