"use client"

import React, {useEffect, useState} from "react";
import {
    Alert,
    AlertTitle,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Skeleton,
    Typography
} from "@mui/material";
import {companiesTable} from "@/inMemoryDatabase/companies";
import {Delete, Edit} from "@mui/icons-material";
import CompaniesEditPage from "@/app/companies/edit";
import CompaniesDeleteDialog from "@/app/companies/delete";

const GetCompaniesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);

    const toggleEditDialog = (status) => {
        setEditDialog(status)
    }

    const toggleDeleteDialog = (status) => {
        setDeleteDialog(status)
    }

    useEffect(() => {
        setTimeout(() => {
            setCompanies(companiesTable);
            setIsLoading(false);
        }, 2500);
    }, []);

    return (
        <div>
            <Typography align="center" variant="h3" color="primary" sx={{marginBottom: 5}}>
                Firmy
            </Typography>

            {
                isLoading
                    ? (
                        <div>
                            <Skeleton variant="rectangular" width="100%" height={50} sx={{marginBottom: 3}}/>
                            <Skeleton variant="rectangular" width="100%" height={50} sx={{marginBottom: 3}}/>
                            <Skeleton variant="rectangular" width="100%" height={50} sx={{marginBottom: 3}}/>
                        </div>
                    )
                    : companies.length > 0
                        ? (
                            <List sx={{bgcolor: 'background.paper'}}>
                                {
                                    companies.map((company, index) => (
                                        <div key={company.id}>
                                            <ListItem
                                                secondaryAction={
                                                    <div>
                                                        <IconButton onClick={() => toggleDeleteDialog(true)}>
                                                            <Delete color="error"/>
                                                        </IconButton>

                                                        <IconButton onClick={() => toggleEditDialog(true)}>
                                                            <Edit color="primary"/>
                                                        </IconButton>
                                                    </div>
                                                }
                                            >
                                                <ListItemText
                                                    primary={company.name}
                                                    secondary={company.footer}
                                                />
                                            </ListItem>

                                            {
                                                companies.length > (index + 1) && (
                                                    <Divider/>
                                                )
                                            }

                                            <CompaniesEditPage
                                                company={company}
                                                open={editDialog}
                                                handleClose={toggleEditDialog}
                                            />

                                            <CompaniesDeleteDialog
                                                open={deleteDialog}
                                                handleClose={toggleDeleteDialog}
                                                company={company}
                                            />
                                        </div>
                                    ))
                                }
                            </List>
                        )
                        : <Alert severity="info">
                            <AlertTitle>Brak danych</AlertTitle>
                            Brak danych do wyświetlenia :(
                        </Alert>
            }
        </div>
    );
};

export default GetCompaniesPage;