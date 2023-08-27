import React from "react";
import {Skeleton, TableCell, TableRow} from "@mui/material";
import styled from "@emotion/styled";

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const LoadingTable = ({cellCount}) => {
    const loadingRows = [1, 2, 3, 4, 5];

    return (
        loadingRows.map(row => (
            <StyledTableRow key={row}>
                {
                    Array(cellCount).fill().map((cell, index) => (
                        <TableCell key={index}>
                            <Skeleton variant="text" width="100%" height={40}/>
                        </TableCell>
                    ))
                }
            </StyledTableRow>
        ))
    );
};

export default LoadingTable;