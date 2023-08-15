"use client"

import React from "react";
import {Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";

const Root = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}));

const Center = styled(Paper)(() => ({
    padding: 30,
}));

const CenterBox = ({children, width, title}) => {
    return (
        <Root>
            {
                title && (
                    <Typography
                        variant="h4"
                        color="primary"
                        sx={{marginBottom: 5}}
                    >
                        {title}
                    </Typography>
                )
            }

            <Center style={{width: width ? width : 500}} elevation={2}>
                {children}
            </Center>
        </Root>
    );
};

export default CenterBox;