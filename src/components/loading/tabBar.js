import React from "react";
import {Skeleton} from "@mui/material";
import styled from "@emotion/styled";

const Flex = styled('div')(() => ({
    display: "flex"
}));

const LoadingTabBar = () => {
    return (
        <Flex>
            <Skeleton width={100} height={45} variant="text" sx={{marginLeft: 1}}/>
            <Skeleton width={100} height={45} variant="text" sx={{marginLeft: 1}}/>
            <Skeleton width={100} height={45} variant="text" sx={{marginLeft: 1}}/>
        </Flex>
    );
};

export default LoadingTabBar;