import React from "react";
import {Divider, Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";

const CustomPaper = styled(Paper)(() => ({
    padding: 20,
    width: "49%"
}));

const FlexChildren = styled('div')(() => ({
    marginBottom: 25,
    marginTop: 25,
    display: "flex",
    alignItems: "center",
}));

const ProductInformations = ({product}) => {
    return (
        <CustomPaper elevation={2}>
            <Typography variant="h5" fontWeight="bold" color="primary" align="center" sx={{marginBottom: 5}}>
                {product.name}
            </Typography>

            <FlexChildren>
                <Typography variant="body2" fontWeight="bold" sx={{marginRight: 1}}>
                    Id:
                </Typography>

                <Typography variant="body2">
                    {product.id}
                </Typography>
            </FlexChildren>

            <Divider/>

            <FlexChildren>
                <Typography variant="body2" fontWeight="bold" sx={{marginRight: 1}}>
                    Opis:
                </Typography>

                <Typography variant="body2">
                    {product.description}
                </Typography>
            </FlexChildren>

            <Divider/>

            <FlexChildren>
                <Typography variant="body2" fontWeight="bold" sx={{marginRight: 1}}>
                    Skład:
                </Typography>

                <Typography variant="body2">
                    {product.composition}
                </Typography>
            </FlexChildren>

        </CustomPaper>
    );
};

export default ProductInformations;