"use client"

import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {productsTable} from "@/inMemoryDatabase/products";
import styled from "@emotion/styled";
import NutritionalValuesTable from "@/app/products/[slug]/components/productNutritionalValuesTable";
import ProductInformations from "@/app/products/[slug]/components/productInformations";
import ProductLabelTabBar from "@/app/products/[slug]/components/labels/productLabelTabBar";
import ProductGetLabelsByBusiness from "@/app/products/[slug]/components/labels/productGetLabelsByBusiness";
import {Alert, AlertTitle, Skeleton, SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import {labelsTable} from "@/inMemoryDatabase/labels";
import {labelDetailsTable} from "@/inMemoryDatabase/labelDetails";
import {Delete, Edit} from "@mui/icons-material";
import ProductDeleteDialog from "@/app/products/[slug]/delete";
import ProductEditDialog from "@/app/products/[slug]/edit";
import {
    addValueAndCheckedFieldToNutritionalValueNames,
    getSortedNutritionalValuesByPriority
} from "@/utils/nutritionalValues/nutritionalValuesFunctions";
import {nutritionalValuesNamesTable} from "@/inMemoryDatabase/nutritionalNames";

const CustomSpeedDial = styled(SpeedDial)(() => ({
    position: "fixed",
    right: 35,
    bottom: 35,
}));

const Flex = styled('div')(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 25,
}));

const GetProductById = () => {
    const params = useParams();
    const productSlug = params.slug;
    const [activeTab, setActiveTab] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProducts] = useState({});
    const [labels, setLabels] = useState({});
    const [details, setDetails] = useState({});
    const [dialog, setDialog] = useState({open: false, type: ""});
    const [nutritionalValues, setNutritionalValues] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const addValuesAndChecked = addValueAndCheckedFieldToNutritionalValueNames(nutritionalValuesNamesTable)
            setNutritionalValues(getSortedNutritionalValuesByPriority(addValuesAndChecked))
            setProducts(productsTable[1]);
            setLabels([labelsTable[0]]);
            setDetails(labelDetailsTable);
            setIsLoading(false);
        }, 2500);
    }, [productSlug]);

    const initialValuesForEditForm = () => {
        const stateUpdate = [...nutritionalValues];

        product.nutritionalValues.map(item => {
            stateUpdate.map(value => {
                if (item.nutritional_name_id.priority === value.priority) {
                    value.value = item.value;
                    value.checked = true;
                }
            })
        });

        setNutritionalValues(stateUpdate);
    }

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

    const openDialog = (type) => {
        setDialog({
            open: true,
            type: type,
        });
    };

    const closeDialog = () => {
        setDialog({open: false, type: ""});
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
                                details={details}
                            />
                        </div>)
                        : (
                            <Alert severity="info" sx={{marginTop: 5}}>
                                <AlertTitle>Brak danych</AlertTitle>
                                Wygląda na to że produkt <strong>{product.name}</strong> nie ma jeszcze etykiet :(
                            </Alert>
                        )
            }

            {
                dialog.type === "delete" && <ProductDeleteDialog
                    open={dialog.open}
                    handleClose={closeDialog}
                    product={product}
                />
            }

            {
                dialog.type === "edit" && <ProductEditDialog
                    open={dialog.open}
                    handleClose={closeDialog}
                    product={product}
                    nutritionalValues={nutritionalValues}
                    setNutritionalValues={setNutritionalValues}
                />
            }

            {
                !isLoading && (
                    <CustomSpeedDial
                        icon={<SpeedDialIcon/>}
                        ariaLabel="SpeedDial produktu"
                    >
                        <SpeedDialAction
                            icon={<Edit/>}
                            tooltipTitle="Edytuj"
                            onClick={() => {
                                openDialog("edit");
                                initialValuesForEditForm();
                            }}
                        />
                        <SpeedDialAction
                            icon={<Delete color="error"/>}
                            tooltipTitle="Usuń"
                            onClick={() => openDialog("delete")}
                        />
                    </CustomSpeedDial>
                )
            }
        </div>
    );
};

export default GetProductById;