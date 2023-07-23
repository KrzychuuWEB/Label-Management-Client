import React from "react";
import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Home} from "@mui/icons-material";

const LeftMenu = ({isOpen, toggleDrawer}) => {
    return (
        <div>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{width: 250}}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem key="Home" disablePadding>
                            <ListItemButton href="/">
                                <ListItemIcon>
                                    <Home/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Strona główna"/>
                            </ListItemButton>
                        </ListItem>

                        <Divider/>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
};

export default LeftMenu;