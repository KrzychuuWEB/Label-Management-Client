import React from "react";
import {Markup} from "interweave";

const LabelDetail = ({detail, children, withoutStyle}) => {
    return (
        <div
            style={withoutStyle ? {} : {
                position: "absolute",
                transform: `translate(${detail.x}px, ${detail.y}px)`,
            }}
        >
            <Markup content={detail.text}/>

            {children}
        </div>
    );
};

export default LabelDetail;