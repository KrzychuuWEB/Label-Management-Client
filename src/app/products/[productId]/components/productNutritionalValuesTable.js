import React from "react";
import {Paper, Skeleton, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import styled from "@emotion/styled";

const CustomPaper = styled(Paper)(() => ({
    width: "49%"
}));

const CustomTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const NutritionalTableValues = ({product, isLoading}) => {
    return (
        <CustomPaper>
            {
                isLoading
                ? (<Skeleton variant="rectangular" width={"100%"} height={400}/>)
                    : (<Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nazwa</TableCell>
                                <TableCell align="right">Wartość</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                               product.nutritionalValues && product.nutritionalValues.map(item => (
                                    <CustomTableRow key={item.id}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell align="right">{item.value}</TableCell>
                                    </CustomTableRow>
                                ))
                            }
                        </TableBody>
                    </Table>)
            }
        </CustomPaper>
    );
};

export default NutritionalTableValues;