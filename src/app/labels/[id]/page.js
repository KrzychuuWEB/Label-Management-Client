"use client"

import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {labelsTable} from "@/inMemoryDatabase/labels";
import Label from "@/components/label/label";
import {labelDetailsTable} from "@/inMemoryDatabase/labelDetails";
import CircularProgressWithTitle from "@/components/loading/circularProgressWithTitle";
import styled from "@emotion/styled";
import GetLabelSpeedDial from "@/app/labels/[id]/components/speedDial";
import LabelDeleteDialog from "@/app/labels/[id]/delete";
import LabelEditInformationDialog from "@/app/labels/[id]/editInformationDialog";
import LabelEditAppearanceDialog from "@/app/labels/[id]/editAppearanceDialog";

const Root = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const GetLabelByIdPage = () => {
    const params = useParams();
    const labelId = params.id;
    const [label, setLabel] = useState({});
    const [labelDetails, setLabelDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dialog, setDialog] = useState({open: false, type: ""});

    useEffect(() => {
        setTimeout(() => {
            setLabel(labelsTable[0]);
            setLabelDetails(labelDetailsTable);
            setIsLoading(false);
        }, 1500);
    }, []);

    const openDialog = type => setDialog({open: true, type: type});

    const closeDialog = () => setDialog({open: false, type: ""});

    return (
        <Root>
            {
                isLoading
                    ? <CircularProgressWithTitle title="Wczytywanie etykiety"/>
                    : <Label label={label} details={labelDetails}>
                    </Label>
            }

            {
                dialog.type === "delete" &&
                <LabelDeleteDialog open={dialog.open} handleClose={closeDialog} label={label}/>
            }

            {
                dialog.type === "info_edit" && <LabelEditInformationDialog
                    open={dialog.open}
                    handleClose={closeDialog}
                    label={label}
                />
            }

            {
                dialog.type === "appearance_edit" && <LabelEditAppearanceDialog
                    open={dialog.open}
                    handleClose={closeDialog}
                    label={label}
                />
            }

            {
                !isLoading &&
                <GetLabelSpeedDial openDialog={openDialog}/>
            }
        </Root>
    );
};

export default GetLabelByIdPage;