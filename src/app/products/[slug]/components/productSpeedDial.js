import React from "react";
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import {Delete, Edit, NoteAdd} from "@mui/icons-material";
import {routes} from "@/utils/routes";
import styled from "@emotion/styled";


const CustomSpeedDial = styled(SpeedDial)(() => ({
    position: "fixed",
    right: 35,
    bottom: 35,
}));

const ProductSpeedDial = ({openDialog, initialValuesForEditForm}) => {
    return (
        <CustomSpeedDial
            icon={<SpeedDialIcon/>}
            ariaLabel="SpeedDial produktu"
        >
            <SpeedDialAction
                icon={<Edit/>}
                tooltipTitle="Edytuj produkt"
                onClick={() => {
                    openDialog("edit");
                    initialValuesForEditForm();
                }}
            />
            <SpeedDialAction
                icon={<Delete color="error"/>}
                tooltipTitle="Usuń produkt"
                onClick={() => openDialog("delete")}
            />
            <SpeedDialAction
                icon={<NoteAdd color="primary"/>}
                tooltipTitle="Dodaj etykiete"
                href={routes.labels.create}
            />
        </CustomSpeedDial>
    );
};

export default ProductSpeedDial;