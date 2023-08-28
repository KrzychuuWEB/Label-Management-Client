import React from "react";
import styled from "@emotion/styled";
import LabelDetail from "@/components/label/labelDetail";
import InfoAlert from "@/components/alerts/infoAlert";
import {Typography} from "@mui/material";

const Root = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}));

const LabelStyled = styled('div')(() => ({
    position: "relative",
    height: 450,
    width: 350,
    border: "1px dashed #000",
}));

const Label = ({label, details}) => {
    return (
        <Root>
            <Typography variant="body2">
                {label.label_template_id.width} x {label.label_template_id.height} ({label.label_template_id.name})
            </Typography>
            <LabelStyled>
                {
                    details.length > 0
                        ? details.map(detail => <LabelDetail key={detail.id} detail={detail}/>)
                        : <InfoAlert>Wygląda na to że wygląd etykiety nie został jeszcze dodany!</InfoAlert>
                }
            </LabelStyled>
        </Root>
    );
};

export default Label;