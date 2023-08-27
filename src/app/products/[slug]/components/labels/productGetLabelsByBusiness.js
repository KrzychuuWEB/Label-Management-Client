import React from "react";
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
                                    <Typography gutterBottom variant="h5" component="div">
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
                                    <Button variant="contained" color="secondary">
                                        <Print/>
                                    </Button>
                                    <Button variant="contained" color="primary">
                                        <Visibility/>
                                    </Button>
                                </CardActions>
                            </CustomCard>
                        ))
                    }
                </FlexLabels>
            </CustomTabPanel>
        ))
    );
};

export default ProductGetLabelsByBusiness;