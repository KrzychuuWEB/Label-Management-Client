"use client"

import {createTheme} from "@mui/material/styles";
import {green, pink} from "@mui/material/colors";

export const myTheme = createTheme({
    palette: {
        primary: {
            main: green[700],
        },
        secondary: {
            main: pink[400],
        },
    },
});
