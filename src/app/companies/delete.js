import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";

const CompaniesDeleteDialog = ({open, handleClose, company}) => {
    const deleteCompany = () => {
        console.log("delete");
    }

    return (
        <div>
            <CustomDialog
                open={open}
                handleClose={handleClose}
                title={`Usuń firme - ${company.name}`}
                dialogActions={
                    <DialogActions>
                        <Button onClick={() => handleClose(false)}>
                            Anuluj
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={deleteCompany}
                        >
                            Usuń
                        </Button>
                    </DialogActions>
                }
            >
                Czy jesteś pewny/a że chcesz usunąć firmę <strong>{company.name}</strong>?<br/>
                <i><strong>Jeżeli usuniesz firmę wszystkie etykiety które są powiązane z firmą zostaną
                    usunięte!</strong></i>
            </CustomDialog>
        </div>
    );
};

export default CompaniesDeleteDialog;