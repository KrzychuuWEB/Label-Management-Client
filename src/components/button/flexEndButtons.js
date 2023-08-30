import React from "react";
import styled from "@emotion/styled";

const ButtonsFlex = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));

const FlexEndButtons = ({children}) => {
    return (
        <ButtonsFlex>
            {children}
        </ButtonsFlex>
    );
};

export default FlexEndButtons;