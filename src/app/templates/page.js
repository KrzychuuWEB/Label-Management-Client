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
    TableRow
} from "@mui/material";
import {labelTemplatesTable} from "@/inMemoryDatabase/labelTemplates";
import styled from "@emotion/styled";
import {Delete, Edit} from "@mui/icons-material";
import LabelTemplateDeleteDialog from "@/app/templates/delete";
import LabelTemplateEditDialog from "@/app/templates/edit";

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const GetLabelTemplatesPage = () => {
    const [labelTemplates, setLabelTemplates] = useState([]);
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
            setLabelTemplates(labelTemplatesTable);
            setIsLoading(false);
        }, 2500);
    }, []);

    return (
        <div>
            <Paper elevation={2}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nazwa szablonu</TableCell>
                            <TableCell>Szerokość szablonu</TableCell>
                            <TableCell>Wysokość szablonu</TableCell>
                            <TableCell>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            isLoading
                                ? [1, 2, 3, 4].map(index => (
                                    <StyledTableRow key={index}>
                                        <TableCell>
                                            <Skeleton variant="text" width="100%" height={40}/>
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton variant="text" width="100%" height={30}/>
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton variant="text" width="100%" height={30}/>
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton variant="text" width="100%" height={30}/>
                                        </TableCell>
                                    </StyledTableRow>
                                ))
                                : labelTemplates.length > 0
                                    ? labelTemplates.map(template => (
                                        <StyledTableRow key={template.id}>
                                            <TableCell>
                                                {template.name}
                                            </TableCell>
                                            <TableCell>
                                                {template.width} px
                                            </TableCell>
                                            <TableCell>
                                                {template.height} px
                                            </TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => openDialog("delete", template)}>
                                                    <Delete color="error"/>
                                                </IconButton>

                                                <IconButton onClick={() => openDialog("edit", template)}>
                                                    <Edit color="primary"/>
                                                </IconButton>
                                            </TableCell>
                                        </StyledTableRow>
                                    ))
                                    : <TableRow>
                                        <TableCell colSpan={4}>
                                            <Alert severity="info">
                                                <AlertTitle>Brak danych</AlertTitle>
                                                Brak danych do wyświetlenie :(
                                            </Alert>
                                        </TableCell>
                                    </TableRow>
                        }
                    </TableBody>
                </Table>

                {
                    dialog.type === "delete" && (
                        <LabelTemplateDeleteDialog
                            open={dialog.open}
                            handleClose={closeDialog}
                            template={dialog.value}
                        />
                    )
                }

                {
                    dialog.type === "edit" && (
                        <LabelTemplateEditDialog
                            open={dialog.open}
                            handleClose={closeDialog}
                            template={dialog.value}
                        />
                    )
                }
            </Paper>
        </div>
    );
};

export default GetLabelTemplatesPage;