import React from "react";
import {Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

const Logo = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
}));

const RWD = styled(Paper)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        width: "90%",
    },
    marginTop: 120,
    padding: 40,
    width: 500,
    marginLeft: "auto",
    marginRight: "auto",
}));

const BoxWithLogo = ({children, title}) => {
    return (
        <RWD elevation={2}>
            <Logo>
                <Image
                    src="/logo.png"
                    alt="App logo"
                    width={160}
                    height={100}
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
        </RWD>
    );
};

export default BoxWithLogo;