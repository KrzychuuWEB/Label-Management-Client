import React from "react";
import ProductInformations from "@/app/products/[slug]/components/productInformations";
import NutritionalValuesTable from "@/app/products/[slug]/components/productNutritionalValuesTable";
import CustomTabPanel from "@/components/tab/CustomTabPanel";
import styled from "@emotion/styled";

const Flex = styled('div')(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
}));

const ProductInfoTabPanel = ({index, tabValue, product, isLoading}) => {
    return (
        <CustomTabPanel index={index} value={tabValue}>
            <Flex>
                <ProductInformations product={product} isLoading={isLoading}/>

                <NutritionalValuesTable product={product} isLoading={isLoading}/>
            </Flex>
        </CustomTabPanel>
    );
};

export default ProductInfoTabPanel;