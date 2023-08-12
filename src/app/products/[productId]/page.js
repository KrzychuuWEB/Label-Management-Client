"use client"

import React, {useState} from "react";
import {useParams} from "next/navigation";
import {inMemoryGetProduct} from "@/inMemoryDatabase/products";
import styled from "@emotion/styled";
import {inMemoryGetLabels} from "@/inMemoryDatabase/labels";
import NutritionalValuesTable from "@/app/products/[productId]/components/productNutritionalValuesTable";
import ProductInformations from "@/app/products/[productId]/components/productInformations";
import ProductLabelTabBar from "@/app/products/[productId]/components/labels/productLabelTabBar";
import ProductGetLabelsByBusiness from "@/app/products/[productId]/components/labels/productGetLabelsByBusiness";

const Flex = styled('div')(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 25,
}));

const GetProductById = () => {
    const params = useParams();
    const productId = params.productId;
    const product = inMemoryGetProduct;
    const labels = inMemoryGetLabels;
    const [activeTab, setActiveTab] = useState(0);

    const changeTab = (event, tab) => {
        setActiveTab(tab);
    }

    const getLabelBusiness = (labels) => {
        let business = [];

        labels.map(label => {
            if (!business.find(item => item === label.business.name)) {
                business.push(label.business.name);
            }
        });

        return business;
    };

    return (
        <div>
            <Flex>
                <ProductInformations product={product}/>

                <NutritionalValuesTable product={product}/>
            </Flex>

            <ProductLabelTabBar
                activeTab={activeTab}
                changeTab={changeTab}
                labels={labels}
                getLabelBusiness={getLabelBusiness}
            />

            <ProductGetLabelsByBusiness
                activeTab={activeTab}
                getLabelBusiness={getLabelBusiness}
                labels={labels}
            />
        </div>
    );
};

export default GetProductById;