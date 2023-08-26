import React from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";
import {Delete} from "@mui/icons-material";

const ProductDeleteDialog = ({open, handleClose, product}) => {
    const deleteProduct = () => {
        console.log("delete product");
    };

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title={`Czy jesteś pewny/a że chcesz usunąć produkt - ${product.name}`}
            dialogActions={<DialogActions>
                <Button
                    onClick={handleClose}
                    color="primary"
                >
                    Anuluj
                </Button>
                <Button
                    startIcon={<Delete/>}
                    onClick={deleteProduct}
                    color="error"
                    variant="contained"
                >
                    Usuń
                </Button>
            </DialogActions>}
        >
            Jeżeli usuniesz produkt wszystkie etykiety oraz zasoby związane z danym produktem zostaną usunięte. Tej
            akcji nie można odwrócić!
        </CustomDialog>
    );
};

export default ProductDeleteDialog;