import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";

const AccountSettingsDeleteDialog = ({open, handleClose}) => {
    const deleteAccount = () => {
        console.log("delete");
    }

    return (
        <CustomDialog
            handleClose={handleClose}
            open={open}
            title="Czy na pewno chcesz usunąć konto?"
            dialogActions={<DialogActions>
                <Button
                    color="primary"
                    onClick={() => handleClose(false)}
                >
                    Anuluj
                </Button>

                <Button
                    color="error"
                    variant="contained"
                    onClick={deleteAccount}
                >
                    Usuń
                </Button>
            </DialogActions>}
        >
            Jeżeli usuniesz konto, cała zawartość dodana przez Ciebie w tym dodane <strong>produkty, etykiety oraz inne
            rzeczy</strong> zostaną <strong>nieodwracalnie usunięte!</strong>
        </CustomDialog>
    );
};

export default AccountSettingsDeleteDialog;