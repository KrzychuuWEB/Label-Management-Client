"use client"

import React, {useEffect, useState} from "react";
import {Button, Paper, Tab, Tabs, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {usersTable} from "@/inMemoryDatabase/users";
import {Delete, Key, Person} from "@mui/icons-material";
import CustomTabPanel from "@/components/tab/CustomTabPanel";
import AccountSettingsChangePasswordTabPanel from "@/app/accounts/settings/panels/changePassword";
import AccountSettingsInformationPanel from "@/app/accounts/settings/panels/information";
import AccountSettingsDeleteDialog from "@/app/accounts/settings/deleteDialog";

const CustomPaper = styled(Paper)(() => ({
    padding: 15,
}));

const FlexDiv = styled('div')(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

const AccountSettingsPage = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [tab, setTab] = useState("information");
    const [deleteDialog, setDeleteDialog] = useState(false);

    const handleOpenDeleteDialog = (status) => {
        setDeleteDialog(status)
    };

    const changeTab = (event, tab) => {
        setTab(tab);
    };

    useEffect(() => {
        setTimeout(() => {
            setUser(usersTable[0]);
            setIsLoading(false);
        }, 2500);
    }, []);

    return (
        <div>
            <CustomPaper elevation={2}>
                <FlexDiv>
                    <Typography variant="h6" sx={{marginBottom: 3}}>
                        Ustawienia konta
                    </Typography>

                    <div>
                        <Button
                            variant="contained"
                            color="error"
                            startIcon={<Delete/>}
                            onClick={() => handleOpenDeleteDialog(true)}
                        >
                            Usuń konto
                        </Button>

                        <AccountSettingsDeleteDialog
                            open={deleteDialog}
                            handleClose={handleOpenDeleteDialog}
                        />
                    </div>
                </FlexDiv>

                <Tabs value={tab} onChange={changeTab}>
                    <Tab icon={<Person/>} iconPosition="start" label="Informacje podstawowe" value="information"/>
                    <Tab icon={<Key/>} iconPosition="start" label="Zmiana hasła" value="change-password"/>
                </Tabs>

                <CustomTabPanel
                    index="information"
                    value={tab}
                >
                    <AccountSettingsInformationPanel user={user} isLoading={isLoading}/>
                </CustomTabPanel>

                <CustomTabPanel
                    index="change-password"
                    value={tab}
                >
                    <AccountSettingsChangePasswordTabPanel/>
                </CustomTabPanel>

            </CustomPaper>
        </div>
    );
};

export default AccountSettingsPage;