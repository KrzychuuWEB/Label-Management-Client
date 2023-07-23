"use client"

import {createTheme} from "@mui/material/styles";
import {pink} from "@mui/material/colors";

export const myTheme = createTheme({
    palette: {
        primary: {
            main: "#5A723A",
        },
        secondary: {
            main: pink[400],
        },
    },
});
