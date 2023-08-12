import React from "react";
import {Paper, Tab, Tabs} from "@mui/material";

const ProductLabelTabBar = ({activeTab, changeTab, getLabelBusiness, labels}) => {
    return (
        <Paper sx={{marginTop: 5}}>
            <Tabs
                value={activeTab}
                onChange={changeTab}
                variant="scrollable"
                scrollButtons="auto"
            >
                {
                    getLabelBusiness(labels).map((business, index) => (
                        <Tab key={index} value={index} label={business}/>
                    ))
                }
            </Tabs>
        </Paper>
    );
};

export default ProductLabelTabBar;