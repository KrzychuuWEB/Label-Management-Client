import React, {useState} from "react";
import styled from "@emotion/styled";
import {Button, Tooltip} from "@mui/material";
import {Print, Visibility} from "@mui/icons-material";
import LabelDetail from "@/components/label/labelDetail";

const Root = styled('div')(() => ({
    position: "relative",
    height: 450,
    width: 350,
    border: "1px dashed #000",
}));

const Hover = styled('div')(() => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "#000",
    opacity: 0.2,
}));

const ActionButtons = styled('div')(() => ({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
}));

const Label = ({displayHover, details}) => {
    const [hover, setHover] = useState(false);

    return (
        <Root
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {
                details.map(detail => <LabelDetail key={detail.id} detail={detail}/>)
            }

            {
                displayHover && (
                    <div>
                        {
                            hover && (
                                <div>
                                    <Hover/>

                                    <ActionButtons>
                                        <Tooltip title="Drukuj etykietę">
                                            <Button variant="contained" color="primary" sx={{marginRight: 1}}>
                                                <Print/>
                                            </Button>
                                        </Tooltip>

                                        <Tooltip title="Pokaż etykietę">
                                            <Button variant="contained" color="secondary">
                                                <Visibility/>
                                            </Button>
                                        </Tooltip>
                                    </ActionButtons>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </Root>
    );
};

export default Label;