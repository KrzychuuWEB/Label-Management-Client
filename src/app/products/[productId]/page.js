"use client"

import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {productsTable} from "@/inMemoryDatabase/products";
import styled from "@emotion/styled";
import NutritionalValuesTable from "@/app/products/[productId]/components/productNutritionalValuesTable";
import ProductInformations from "@/app/products/[productId]/components/productInformations";
import ProductLabelTabBar from "@/app/products/[productId]/components/labels/productLabelTabBar";
import ProductGetLabelsByBusiness from "@/app/products/[productId]/components/labels/productGetLabelsByBusiness";
import {Alert, AlertTitle, Skeleton} from "@mui/material";
import {labelsTable} from "@/inMemoryDatabase/labels";

const Flex = styled('div')(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 25,
}));

const GetProductById = () => {
    const params = useParams();
    const productId = params.productId;
    const [activeTab, setActiveTab] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProducts] = useState({});
    const [labels, setLabels] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsTable[productId - 1]);
            setLabels(labelsTable[1]);
            setIsLoading(false);
        }, 5000);
    }, [productId]);

    const changeTab = (event, tab) => {
        setActiveTab(tab);
    }

    const getLabelBusiness = (labelsList) => {
        let business = [];

        labelsList.map(label => {
            if (!business.find(item => item === label.business.name)) {
                business.push(label.business.name);
            }
        });

        return business;
    };

    return (
        <div>
            <Flex>
                <ProductInformations product={product} isLoading={isLoading}/>

                <NutritionalValuesTable product={product} isLoading={isLoading}/>
            </Flex>

            {
                isLoading
                    ? <Skeleton variant="rectengular" width="100%" height={150} sx={{marginTop: 5}}/>
                    : labels.length > 0
                        ? (<div>
                            <ProductLabelTabBar
                                activeTab={activeTab}
                                changeTab={changeTab}
                                labels={labels}
                                getLabelBusiness={getLabelBusiness}
                                isLoading={isLoading}
                            />

                            <ProductGetLabelsByBusiness
                                activeTab={activeTab}
                                getLabelBusiness={getLabelBusiness}
                                labels={labels}
                                isLoading={isLoading}
                            />
                        </div>)
                        : (
                            <Alert severity="info" sx={{marginTop: 5}}>
                                <AlertTitle>Brak danych</AlertTitle>
                                Wygląda na to że produkt <strong>{product.name}</strong> nie ma jeszcze etykiet :(
                            </Alert>
                        )
            }
        </div>
    );
};

export default GetProductById;