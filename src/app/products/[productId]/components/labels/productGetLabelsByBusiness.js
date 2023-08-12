import React from "react";
import CustomTabPanel from "@/app/products/[productId]/components/labels/CustomTabPanel";
import Label from "@/components/label/label";
import styled from "@emotion/styled";

const FlexLabels = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    "> div": {
        marginRight: 15,
    }
}));

const ProductGetLabelsByBusiness = ({getLabelBusiness, labels, activeTab}) => {
    const getLabelsByBusiness = (labels, business) => {
        let sortLabels = [];

        labels.map(label => {
            if (label.business.name === business) {
                sortLabels.push(label);
            }
        });

        return sortLabels;
    };

    return (
        <div>
            {
                getLabelBusiness(labels).map((business, index) => (
                    <CustomTabPanel key={index} value={activeTab} index={index}>
                        <FlexLabels>
                            {
                                getLabelsByBusiness(labels, business).map(label => (
                                    <div key={label.id}>
                                        <Label displayHover/>
                                        {label.id}
                                    </div>
                                ))
                            }
                        </FlexLabels>
                    </CustomTabPanel>
                ))
            }
        </div>
    );
};

export default ProductGetLabelsByBusiness;