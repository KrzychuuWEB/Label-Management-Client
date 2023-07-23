"use client"

import {createTheme} from "@mui/material/styles";
import {pink} from "@mui/material/colors";

export const myTheme = createTheme({
    palette: {
        primary: {
            main: "#729343",
        },
        secondary: {
            main: pink[400],
        },
    },
});
