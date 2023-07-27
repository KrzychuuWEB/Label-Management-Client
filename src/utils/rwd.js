"use client"

import styled from "@emotion/styled";

export const RWD = styled('main')(({theme}) => ({
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 90,
    padding: theme.spacing(1.5),

    [theme.breakpoints.down('xs')]: {
        width: '98%',
    },
    [theme.breakpoints.only('sm')]: {
        width: 750,
    },
    [theme.breakpoints.only('md')]: {
        width: 1000,
    },
    [theme.breakpoints.only('lg')]: {
        width: 1200,
    },
    [theme.breakpoints.only('xl')]: {
        width: 1500,
    },
}));