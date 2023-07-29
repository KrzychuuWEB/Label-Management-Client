import React from "react";
import {useTheme} from "@mui/material";

const LabelTemplate = ({isPresentation, width, height, children}) => {
    const theme = useTheme();

    return (
        <div
            style={{
                position: "relative",
                width: width,
                height: height,
                border: isPresentation ? `1px dashed ${theme.palette.primary.main}` : "none"
            }}
        >
            {children}
        </div>
    );
};

export default LabelTemplate;