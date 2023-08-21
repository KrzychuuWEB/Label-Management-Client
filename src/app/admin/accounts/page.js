"use client"

import React, {useEffect, useState} from "react";
import {IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography} from "@mui/material";
import {usersTable} from "@/inMemoryDatabase/users";
import styled from "@emotion/styled";
import {LockClock, LockOpen} from "@mui/icons-material";
import AdminAccountLockDialog from "@/app/admin/accounts/lockDialog";

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const AdminGetAccountsPage = () => {
    const [users, setUsers] = useState([]);
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
            setUsers(usersTable);
        }, 2500);
    }, []);

    return (
        <div>
            <Typography align="center" color="primary" variant="h4" sx={{marginTop: 2, marginBottom: 5}}>
                Lista użytkowników
            </Typography>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nazwa użytkownika</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Data rejestracji</TableCell>
                            <TableCell>Data ostatniego logowania</TableCell>
                            <TableCell>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map(user => (
                                <StyledTableRow key={user.id}>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>20.08.2023 10:57:21</TableCell>
                                    <TableCell>21.08.2023 08:32:43</TableCell>
                                    <TableCell>
                                        <Tooltip title="Zablokuj użytkownika">
                                            <IconButton onClick={() => openDialog("accountLock", user)}>
                                                <LockClock color="primary"/>
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="Odblokuj użytkownika">
                                            <IconButton>
                                                <LockOpen color="primary"/>
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </StyledTableRow>
                            ))
                        }
                    </TableBody>
                </Table>

                {
                    dialog.type === "accountLock" && (
                        <AdminAccountLockDialog
                            account={dialog.value}
                            open={dialog.open}
                            handleClose={closeDialog}
                        />
                    )
                }
            </Paper>
        </div>
    );
};

export default AdminGetAccountsPage;