import React from "react";
import {Box} from "@mui/material";

const CustomTabPanel = ({index, value, children}) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`get-label-tab-panel-${index}`}
        >
            {value === index && (
                <Box sx={{p: 1, marginTop: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
};

export default CustomTabPanel;