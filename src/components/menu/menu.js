import React from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import Link from "next/link";

const MenuBar = () => {
    return (
        <Box>
            <AppBar position="fixed" color='inherit'>
                <Toolbar>
                    <Tooltip title="Menu">
                        <IconButton
                            size="large"
                            edge="start"
                            color="primary"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <Menu/>
                        </IconButton>
                    </Tooltip>

                    <Typography color="primary" variant="h6" component={Link} href="/" sx={{flexGrow: 1}}>
                        <Tooltip title="Strona główna">
                            LABEL
                        </Tooltip>
                    </Typography>
                    <Button color="primary">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MenuBar;