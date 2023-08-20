"use client"

import React from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import Link from "next/link";
import LeftMenu from "@/components/menu/leftMenu";
import {routes} from "@/utils/routes";
import {APP_NAME} from "@/utils/constants";
import styled from "@emotion/styled";

const ActionButtons = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));

const MenuBar = () => {
    const [toggleMenu, setToggleMenu] = React.useState({open: false});

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setToggleMenu({...toggleMenu, open: open});
    };

    return (
        <Box>
            <AppBar position="fixed" color='inherit'>
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <div>
                            <Tooltip title="Menu">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="primary"
                                    aria-label="menu"
                                    sx={{mr: 2}}
                                    onClick={toggleDrawer(true)}
                                >
                                    <Menu/>
                                </IconButton>
                            </Tooltip>
                        </div>

                        <div>
                            <Tooltip title="Strona główna">
                                <Link href={routes.home}>
                                    <Typography variant="h6" color="primary">
                                        {APP_NAME}
                                    </Typography>

                                    {/*<Icon*/}
                                    {/*    sx={{width: 80, height: 45}}*/}
                                    {/*    component="img"*/}
                                    {/*    src="/logo.png"*/}
                                    {/*    alt="App logo"*/}
                                    {/*/>*/}
                                </Link>
                            </Tooltip>
                        </div>
                    </Box>

                    <ActionButtons>
                        <Button
                            variant="contained"
                            color="primary"
                            href={routes.accounts.register}
                        >
                            Dołącz już dziś
                        </Button>
                        <Typography sx={{marginLeft: 2, marginRight: 1}} variant="body2" color="primary">
                            lub
                        </Typography>
                        <Button
                            color="primary"
                            href={routes.accounts.login}
                        >
                            Zaloguj się
                        </Button>
                    </ActionButtons>
                </Toolbar>
            </AppBar>

            <LeftMenu
                isOpen={toggleMenu.open}
                toggleDrawer={toggleDrawer}
            />
        </Box>
    );
};

export default MenuBar;