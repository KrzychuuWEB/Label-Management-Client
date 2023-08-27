import React from "react";
import {TableRow} from "@mui/material";
import styled from "@emotion/styled";

const CustomTableRowStyle = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const CustomTableRow = ({children}) => {
    return (
        <CustomTableRowStyle>
            {children}
        </CustomTableRowStyle>
    );
};

export default CustomTableRow;