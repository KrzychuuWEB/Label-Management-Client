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
    Tooltip,
    Typography
} from "@mui/material";
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setUsers(usersTable);
            setIsLoading(false);
        }, 2500);
    }, []);

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
                                        <TableCell>
                                            <Skeleton variant="text" width="100%" height={30}/>
                                        </TableCell>
                                    </StyledTableRow>
                                ))
                                : users.length > 0
                                    ? users.map(user => (
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
                                    : <TableRow>
                                        <TableCell colSpan={5}>
                                            <Alert severity="info">
                                                <AlertTitle>Brak danych</AlertTitle>
                                                Brak danych do wyświetlenia :(
                                            </Alert>
                                        </TableCell>
                                    </TableRow>
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