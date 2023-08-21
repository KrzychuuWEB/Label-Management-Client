"use client"

import React, {useEffect, useState} from "react";
import {
    Alert,
    AlertTitle,
    IconButton,
    Paper,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {nutritionalValuesNamesTable} from "@/inMemoryDatabase/nutritionalNames";
import {Delete, Edit} from "@mui/icons-material";
import styled from "@emotion/styled";
import AdminNutritionalValuesDeleteDialog from "@/app/admin/nutritionalValues/delete";
import AdminNutritionalValuesEditDialog from "@/app/admin/nutritionalValues/edit";

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const AdminGetNutritionalValuesPage = () => {
    const [nutritionalValues, setNutritionalValues] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dialog, setDialog] = useState({});

    const openDialog = (type, value) => {
        setDialog({
            open: true,
            type: type,
            value: value,
        });
    };

    const closeDialog = () => {
        setDialog({
            open: false,
            value: false,
            type: false,
        });
    };

    useEffect(() => {
        setTimeout(() => {
            setNutritionalValues(nutritionalValuesNamesTable);
            setIsLoading(false);
        }, 2500)
    }, []);

    return (
        <div>
            <Typography align="center" variant="h4" color="primary" sx={{marginBottom: 5}}>
                Wartości odżywcze
            </Typography>

            {
                isLoading
                    ? (<Skeleton width="100%" height={500} variant="rectangular"/>)
                    : nutritionalValues.length > 0
                        ? (
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Nazwa wartości odżywczej
                                            </TableCell>
                                            <TableCell>
                                                Priorytet
                                            </TableCell>
                                            <TableCell align="right">
                                                Akcje
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            nutritionalValues.map(nutritionalValue => (
                                                <StyledTableRow key={nutritionalValue.id}>
                                                    <TableCell width="40%">
                                                        {nutritionalValue.name}
                                                    </TableCell>
                                                    <TableCell width="40%">
                                                        {nutritionalValue.priority}
                                                    </TableCell>
                                                    <TableCell align="right" width="20%">
                                                        <IconButton onClick={() => openDialog("delete", nutritionalValue)}>
                                                            <Delete color="error"/>
                                                        </IconButton>

                                                        <IconButton onClick={() => openDialog("edit", nutritionalValue)}>
                                                            <Edit color="primary"/>
                                                        </IconButton>
                                                    </TableCell>
                                                </StyledTableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>

                                {
                                    dialog.type === "delete" && (
                                        <AdminNutritionalValuesDeleteDialog
                                            open={dialog.open}
                                            handleClose={closeDialog}
                                            nutritionalValue={dialog.value}
                                        />
                                    )
                                }

                                {
                                    dialog.type === "edit" && (
                                        <AdminNutritionalValuesEditDialog
                                            open={dialog.open}
                                            handleClose={closeDialog}
                                            nutritionalValue={dialog.value}
                                        />
                                    )
                                }
                            </Paper>
                        )
                        : (
                            <Alert severity="info">
                                <AlertTitle>Brak danych</AlertTitle>
                                Brak danych do wyświetlenia :(
                            </Alert>
                        )
            }
        </div>
    );
};

export default AdminGetNutritionalValuesPage;