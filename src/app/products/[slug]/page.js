"use client"

import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {productsTable} from "@/inMemoryDatabase/products";
import ProductLabelTabBar from "@/app/products/[slug]/components/labels/productLabelTabBar";
import ProductGetLabelsByBusiness from "@/app/products/[slug]/components/labels/productGetLabelsByBusiness";
import {Tab, Tabs} from "@mui/material";
import {labelsTable} from "@/inMemoryDatabase/labels";
import ProductDeleteDialog from "@/app/products/[slug]/delete";
import ProductEditDialog from "@/app/products/[slug]/edit";
import {
    addValueAndCheckedFieldToNutritionalValueNames,
    getSortedNutritionalValuesByPriority
} from "@/utils/nutritionalValues/nutritionalValuesFunctions";
import {nutritionalValuesNamesTable} from "@/inMemoryDatabase/nutritionalNames";
import ProductSpeedDial from "@/app/products/[slug]/components/productSpeedDial";
import ProductInfoTabPanel from "@/app/products/[slug]/components/tabs/productInfoTabPanel";
import ProductBatchesTabPanel from "@/app/products/[slug]/components/tabs/productBatchesTabPanel";
import InfoAlert from "@/components/alert/infoAlert";
import {batchesTable} from "@/inMemoryDatabase/batches";
import CircularProgressWithTitle from "@/components/loading/circularProgressWithTitle";

const GetProductById = () => {
    const params = useParams();
    const productSlug = params.slug;
    const [productTab, setProductTab] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProducts] = useState({});
    const [labels, setLabels] = useState([]);
    const [batches, setBatches] = useState([]);
    const [dialog, setDialog] = useState({open: false, type: ""});
    const [nutritionalValues, setNutritionalValues] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const addValuesAndChecked = addValueAndCheckedFieldToNutritionalValueNames(nutritionalValuesNamesTable)
            setNutritionalValues(getSortedNutritionalValuesByPriority(addValuesAndChecked))
            setProducts(productsTable[1]);
            setLabels(labelsTable);
            setBatches(batchesTable);
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

    const changeProductTab = (event, tab) => {
        setProductTab(tab);
    }

    const getLabelBusiness = (labelsList) => {
        let business = [];

        if (labelsList) {
            labelsList.map(label => {
                if (!business.find(item => item === label.company_id.name)) {
                    business.push(label.company_id.name);
                }
            });
        }

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
            <Tabs
                value={productTab}
                onChange={changeProductTab}
            >
                <Tab index={0} label="Informacje"/>
                <Tab index={1} label="Partie"/>
            </Tabs>

            <ProductInfoTabPanel
                product={product}
                tabValue={productTab}
                isLoading={isLoading}
                index={0}
            />

            <ProductBatchesTabPanel
                tabValue={productTab}
                isLoading={isLoading}
                index={1}
                batches={batches}
            />

            {
                isLoading
                    ? <CircularProgressWithTitle
                        title="Wczytywanie etykiet"
                        marginTop={100}
                    />
                    : labels.length > 0
                        ? <div>
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
                        : <InfoAlert>
                            Wygląda na to że produkt nie ma jeszcze przypisanych etykiet
                        </InfoAlert>
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
                !isLoading &&
                <ProductSpeedDial initialValuesForEditForm={initialValuesForEditForm} openDialog={openDialog}/>
            }
        </div>
    );
};

export default GetProductById;