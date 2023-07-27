import React from "react";
import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Home, Label} from "@mui/icons-material";
import {routes} from "@/utils/routes";

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
                        <ListItem disablePadding>
                            <ListItemButton href={routes.home}>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon
                                >
                                <ListItemText primary="Strona główna"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton href={routes.label.create}>
                                <ListItemIcon>
                                    <Label />
                                </ListItemIcon
                                >
                                <ListItemText primary="Stwórz etykietę"/>
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