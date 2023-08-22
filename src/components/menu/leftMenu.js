import React from "react";
import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {
    AddBusiness,
    Business,
    Home,
    Inventory,
    Label,
    ManageAccounts, People,
    Person,
    PersonAdd,
    TableRows,
    TableView, ViewInAr
} from "@mui/icons-material";
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
                    sx={{width: 300}}
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
                            <ListItemButton href={routes.accounts.settings}>
                                <ListItemIcon>
                                    <ManageAccounts/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Ustawienia konta"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton href={routes.admin.accounts.get}>
                                <ListItemIcon>
                                    <People/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Lista użytkowników"/>
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
                            <ListItemButton href={routes.templates.getAll}>
                                <ListItemIcon>
                                    <ViewInAr/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Pokaż szablony"/>
                            </ListItemButton>
                        </ListItem>

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

                        <ListItem>
                            <ListItemButton href={routes.admin.nutritionalValues.get}>
                                <ListItemIcon>
                                    <TableView/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Pokaż wartości odżywcze"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton href={routes.admin.nutritionalValues.create}>
                                <ListItemIcon>
                                    <TableRows/>
                                </ListItemIcon
                                >
                                <ListItemText primary="Dodaj wartości odżywcze"/>
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