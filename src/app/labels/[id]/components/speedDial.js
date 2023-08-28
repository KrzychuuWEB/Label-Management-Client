import React from "react";
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import styled from "@emotion/styled";
import {Brush, Delete, Edit} from "@mui/icons-material";

const CustomSpeedDial = styled(SpeedDial)(() => ({
    position: "fixed",
    right: 35,
    bottom: 35,
}));

const GetLabelSpeedDial = ({openDialog}) => {
    return (
        <CustomSpeedDial
            ariaLabel="SpeedDial label"
            icon={<SpeedDialIcon/>}
        >
            <SpeedDialAction
                icon={<Edit color="primary"/>}
                tooltipTitle="Edytuj informacje o etykiecie"
                onClick={() => openDialog("info_edit")}
            />
            <SpeedDialAction
                icon={<Brush color="secondary"/>}
                tooltipTitle="Edytuj wygląd etykiety"
                onClick={() => openDialog("appearance_edit")}
            />
            <SpeedDialAction
                icon={<Delete color="error"/>}
                tooltipTitle="Usuń etykiete"
                onClick={() => openDialog("delete")}
            />
        </CustomSpeedDial>
    );
};

export default GetLabelSpeedDial;