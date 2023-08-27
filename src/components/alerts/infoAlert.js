import React from "react";
import {Alert, AlertTitle, Typography} from "@mui/material";

const InfoAlert = ({title, children}) => {
    return (
        <Alert severity="info" sx={{marginTop: 5}}>
            <AlertTitle>
                {
                    title
                        ? title
                        : `Brak danych do wczytania`
                }
            </AlertTitle>
            <Typography variant="body2">
                {children}
            </Typography>
        </Alert>
    );
};

export default InfoAlert;