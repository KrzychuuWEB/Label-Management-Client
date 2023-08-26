import React from "react";
import {Divider, Paper, Skeleton, Typography} from "@mui/material";
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

const ProductInformations = ({product, isLoading}) => {
    return (
        <CustomPaper elevation={2}>
            <Typography variant="h5" fontWeight="bold" color="primary" align="center" sx={{marginBottom: 5}}>
                {
                    isLoading
                        ? (<Skeleton variant="text" width={"50%"} sx={{margin: "0 auto"}} height={40}/>)
                        : product.name
                }
            </Typography>

            <FlexChildren>
                <Typography variant="body2" fontWeight="bold" sx={{marginRight: 1}}>
                    Opis:
                </Typography>

                <Typography variant="body2">
                    {
                        isLoading
                            ? (<Skeleton variant="text" width={100} height={40}/>)
                            : product.description
                    }
                </Typography>
            </FlexChildren>

            <Divider/>

            <FlexChildren>
                <Typography variant="body2" fontWeight="bold" sx={{marginRight: 1}}>
                    Skład:
                </Typography>

                <Typography variant="body2">
                    {
                        isLoading
                            ? (<Skeleton variant="text" width={100} height={40}/>)
                            : product.composition
                    }
                </Typography>
            </FlexChildren>

            <Divider/>

            <FlexChildren>
                <Typography variant="body2" fontWeight="bold" sx={{marginRight: 1}}>
                    Slug:
                </Typography>

                <Typography variant="body2">
                    {
                        isLoading
                            ? (<Skeleton variant="text" width={100} height={40}/>)
                            : product.slug
                    }
                </Typography>
            </FlexChildren>
        </CustomPaper>
    );
};

export default ProductInformations;