import React from "react";
import {Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

const Logo = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
}));

const BoxWithLogo = ({children, title}) => {
    return (
        <Paper
            elevation={2}
            sx={{
                marginTop: 5,
                padding: 5,
                width: 500,
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <Logo>
                <Image
                    src="/logo.png"
                    alt="App logo"
                />
            </Logo>

            <Typography
                color="primary"
                variant="h6"
                sx={{marginBottom: 2}}
                align="center"
            >
                {title}
            </Typography>

            {children}
        </Paper>
    );
};

export default BoxWithLogo;