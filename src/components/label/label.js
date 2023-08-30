import React from "react";
import styled from "@emotion/styled";
import LabelDetail from "@/components/label/labelDetail";
import InfoAlert from "@/components/alert/infoAlert";
import {Typography} from "@mui/material";
import LabelTemplate from "@/components/labelTemplate/labelTemplate";

const Root = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}));

const Label = ({label, details}) => {
    return (
        <Root>
            <Typography variant="body2">
                {label.label_template_id.width} x {label.label_template_id.height} ({label.label_template_id.name})
            </Typography>
            <LabelTemplate
                width={298}
                height={420}
                isPresentation={true}
            >
                {
                    details.length > 0
                        ? details.map(detail => <LabelDetail key={detail.id} detail={detail}/>)
                        : <InfoAlert>Wygląda na to że wygląd etykiety nie został jeszcze dodany!</InfoAlert>
                }
            </LabelTemplate>
        </Root>
    );
};

export default Label;