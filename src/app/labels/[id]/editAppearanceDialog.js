import React, {useEffect, useState} from "react";
import CustomDialog from "@/components/dialog";
import {Button, DialogActions} from "@mui/material";
import {Edit} from "@mui/icons-material";
import AppearanceLabel from "src/components/label/appearanceLabel";
import {labelDetailsTable} from "@/inMemoryDatabase/labelDetails";

const LabelEditAppearanceDialog = ({open, handleClose}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [labelTextContent, setLabelTextContent] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLabelTextContent(labelDetailsTable);
            setIsLoading(false);
        }, 1500)
    }, []);

    const saveChange = () => {
        console.log(labelTextContent);
    };

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title="Edycja wyglądu etykiety"
            dialogActions={<DialogActions sx={{marginTop: 1}}>
                <Button
                    color="primary"
                    onClick={handleClose}
                >
                    Anuluj
                </Button>
                <Button
                    disabled={isLoading}
                    color="primary"
                    variant="contained"
                    startIcon={<Edit/>}
                    onClick={saveChange}
                >
                    Edytuj
                </Button>
            </DialogActions>}
        >
            <AppearanceLabel setLabelTextContent={setLabelTextContent} labelTextContent={labelTextContent}/>
        </CustomDialog>
    );
};

export default LabelEditAppearanceDialog;