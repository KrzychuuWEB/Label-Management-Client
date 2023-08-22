import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";
import {Delete} from "@mui/icons-material";

const LabelTemplateDeleteDialog = ({open, handleClose, template}) => {
    const deleteTemplate = () => {
        console.log("delete");
    };

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title={`Czy na pewno chcesz usunąć szablon - ${template.name}`}
            dialogActions={<DialogActions>
                <Button
                    onClick={handleClose}
                >
                    Anuluj
                </Button>
                <Button
                    color="error"
                    onClick={() => deleteTemplate()}
                    startIcon={<Delete/>}
                    variant="contained"
                >
                    Usuń
                </Button>
            </DialogActions>}
        >
            Jeżeli usuniesz szablon, <u>wszystkie etykiety które używają danego szablonu
            zostaną <strong>usunięte!</strong></u>
        </CustomDialog>
    );
};

export default LabelTemplateDeleteDialog;