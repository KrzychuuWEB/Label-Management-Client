import React from "react";
import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {AddBusiness, Business, Home, Inventory, Label, Login, Person, PersonAdd} from "@mui/icons-material";
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
                        <ListItem>
                            <ListItemButton href={routes.home}>
                                <ListItemIcon>
                                    <Home/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Strona główna"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton href={routes.home}>
                                <ListItemIcon>
                                    <Login/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Logowanie"/>
                            </ListItemButton>
                        </ListItem>

                        <Divider/>

                        <ListItem>
                            <ListItemButton href={routes.products.create}>
                                <ListItemIcon>
                                    <Inventory/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Dodaj produkt"/>
                            </ListItemButton>
                        </ListItem>

                        <Divider/>

                        <ListItem>
                            <ListItemButton href={routes.initials.getInitials}>
                                <ListItemIcon>
                                    <Person/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Pokaż inicjały"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton href={routes.initials.create}>
                                <ListItemIcon>
                                    <PersonAdd/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Dodaj inicjały"/>
                            </ListItemButton>
                        </ListItem>

                        <Divider/>

                        <ListItem>
                            <ListItemButton href={routes.companies.getCompanies}>
                                <ListItemIcon>
                                    <Business/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Pokaż firmy"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton href={routes.companies.create}>
                                <ListItemIcon>
                                    <AddBusiness/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Dodaj firme"/>
                            </ListItemButton>
                        </ListItem>

                        <Divider/>

                        <ListItem>
                            <ListItemButton href={routes.labels.create}>
                                <ListItemIcon>
                                    <Label/>
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