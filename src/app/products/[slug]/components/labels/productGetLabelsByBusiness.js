import React, {useState} from "react";
import CustomTabPanel from "@/components/tab/CustomTabPanel";
import styled from "@emotion/styled";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {AspectRatio, Pattern, Print, Visibility} from "@mui/icons-material";
import ProductLabelPrintDialog from "@/app/products/[slug]/components/labels/productLabelPrintDialog";
import {routes} from "@/utils/routes";

const FlexLabels = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
}));

const CustomCard = styled(Card)(({theme}) => ({
    margin: 10,
    padding: 10,
    [theme.breakpoints.down("xs")]: {
        flexBasis: "calc(98% - 40px)",
    },
    [theme.breakpoints.only("sm")]: {
        flexBasis: "calc(52% - 40px)",
    },
    [theme.breakpoints.only("md")]: {
        flexBasis: "calc(35.2% - 40px)",
    },
    [theme.breakpoints.up("lg")]: {
        flexBasis: "calc(26.3% - 40px)",
    }
}));

const ProductGetLabelsByBusiness = ({getLabelBusiness, labels, activeTab}) => {
    const [dialog, setDialog] = useState({open: false, type: "", value: ""});

    const openDialog = (type, value) => setDialog({open: true, type: type, value: value});

    const closeDialog = () => setDialog({open: false, type: "", value: ""});

    const getLabelsByBusiness = (labelsList, business) => {
        let sortLabels = [];

        labelsList.map(label => {
            if (label.business.name === business) {
                sortLabels.push(label);
            }
        });

        return sortLabels;
    };

    return (
        getLabelBusiness(labels).map((business, index) => (
            <CustomTabPanel key={index} value={activeTab} index={index}>
                <FlexLabels>
                    {
                        getLabelsByBusiness(labels, business).map(label => (
                            <CustomCard key={label.id}>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {label.name}
                                    </Typography>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <Pattern/>
                                            </ListItemIcon>
                                            <ListItemText primary="Etykiety małe"/>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <AspectRatio/>
                                            </ListItemIcon>
                                            <ListItemText primary="240x240" secondary="Szer. x dług."/>
                                        </ListItem>
                                    </List>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => openDialog("print", label)}
                                    >
                                        <Print/>
                                    </Button>
                                    <Button
                                        sx={{marginLeft: 1}}
                                        variant="contained"
                                        color="primary"
                                        href={routes.labels.getById(label.id)}
                                    >
                                        <Visibility/>
                                    </Button>
                                </CardActions>
                            </CustomCard>
                        ))
                    }
                </FlexLabels>

                {
                    dialog.type === "print" &&
                        <ProductLabelPrintDialog
                            open={dialog.open}
                            handleClose={closeDialog}
                            label={dialog.value}
                        />
                }
            </CustomTabPanel>
        ))
    );
};

export default ProductGetLabelsByBusiness;