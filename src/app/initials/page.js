"use client"

import React, {useEffect, useState} from "react";
import {Alert, AlertTitle, Divider, IconButton, List, ListItem, ListItemText, Skeleton} from "@mui/material";
import {initialsTable} from "@/inMemoryDatabase/initials";
import {Delete, Edit} from "@mui/icons-material";
import InitialEditDialog from "@/app/initials/edit";
import InitialDeleteDialog from "@/app/initials/delete";

const GetInitialsPage = () => {
    const [initials, setInitials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);

    const toggleEditDialog = (status) => {
        setEditDialog(status);
    }

    const toggleDeleteDialog = (status) => {
        setDeleteDialog(status);
    }

    useEffect(() => {
        setTimeout(() => {
            setInitials(initialsTable);
            setIsLoading(false);
        }, 2500);
    }, []);

    return (
        <div>
            {
                isLoading
                    ? (<div>
                        <Skeleton variant="rectangular" width="100%" height={50}/>
                        <Skeleton variant="rectangular" width="100%" height={50} sx={{marginTop: 2}}/>
                        <Skeleton variant="rectangular" width="100%" height={50} sx={{marginTop: 2}}/>
                        <Skeleton variant="rectangular" width="100%" height={50} sx={{marginTop: 2}}/>
                    </div>)
                    : initials.length > 0 ? (
                            <List
                                sx={{
                                    bgcolor: 'background.paper',
                                }}
                            >
                                {
                                    initials.map((initial, index) => (
                                        <div key={initial.id}>
                                            <ListItem secondaryAction={
                                                <div>
                                                    <IconButton onClick={() => toggleDeleteDialog(true)}>
                                                        <Delete color="error"/>
                                                    </IconButton>

                                                    <IconButton onClick={() => toggleEditDialog(true)}>
                                                        <Edit color="primary"/>
                                                    </IconButton>
                                                </div>
                                            }>
                                                <ListItemText
                                                    primary={initial.first_name + " " + initial.last_name}
                                                    secondary={initial.name}
                                                />
                                            </ListItem>

                                            {
                                                initials.length > (index + 1) && (
                                                    <Divider/>
                                                )
                                            }

                                            <InitialEditDialog initial={initial} open={editDialog}
                                                               handleClose={toggleEditDialog}/>
                                            <InitialDeleteDialog initial={initial} open={deleteDialog}
                                                                 handleClose={toggleDeleteDialog}/>
                                        </div>
                                    ))
                                }
                            </List>
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

export default GetInitialsPage;