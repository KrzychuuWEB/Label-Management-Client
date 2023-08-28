import React from "react";
import {CircularProgress, Typography} from "@mui/material";
import styled from "@emotion/styled";

const Flex = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}));

const CircularProgressWithTitle = ({title, marginTop}) => {
    return (
        <Flex style={{marginTop: marginTop ? marginTop : 0}}>
            <CircularProgress color="primary"/>
            <Typography variant="subtitle2" sx={{marginTop: 1}} color="primary">
                {title}
            </Typography>
        </Flex>
    );
};

export default CircularProgressWithTitle;