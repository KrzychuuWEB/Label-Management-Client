import React from "react";
import {Markup} from "interweave";

const LabelDetail = ({detail}) => {
    return (
        <div
            style={{
                position: "absolute",
                top: detail.pos_x,
                left: detail.pos_y
            }}
        >
            <Markup content={detail.text}/>
        </div>
    );
};

export default LabelDetail;