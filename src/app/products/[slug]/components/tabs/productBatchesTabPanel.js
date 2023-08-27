import React, {useState} from "react";
import CustomTabPanel from "@/components/tab/CustomTabPanel";
import {IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip} from "@mui/material";
import LoadingTable from "@/components/loading/table";
import {Add, Delete, Edit} from "@mui/icons-material";
import DeleteBatchDialog from "@/app/products/[slug]/components/batches/delete";
import EditBatchDialog from "@/app/products/[slug]/components/batches/edit";
import CustomTableRow from "@/components/tables/customTableRow";
import CreateBatchDialog from "@/app/products/[slug]/components/batches/create";
import InfoAlert from "@/components/alerts/infoAlert";

const ProductBatchesTabPanel = ({index, tabValue, isLoading, batches}) => {
    const [batchDialog, setBatchDialog] = useState({open: false, type: "", value: ""});

    const openBatchDialog = (type, value) => {
        setBatchDialog({
            open: true,
            type: type,
            value: value
        });
    };

    const handleCloseBatchDialog = () => {
        setBatchDialog({open: false, type: "", value: ""});
    };

    return (
        <CustomTabPanel index={index} value={tabValue}>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Numer partii
                            </TableCell>
                            <TableCell>
                                Data do spożycia
                            </TableCell>
                            <TableCell>
                                Kraj pochodzenia
                            </TableCell>
                            <TableCell>
                                Kto dodał
                            </TableCell>
                            <TableCell width="10%" align="center">
                                Akcje
                                <Tooltip title="Dodaj nową partię">
                                    <IconButton
                                        onClick={() => openBatchDialog("create", "")}
                                    >
                                        <Add color="primary"/>
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            isLoading
                                ? <LoadingTable cellCount={5}/>
                                : batches.length > 0
                                    ? batches.map(batch => (
                                        <CustomTableRow key={batch.id}>
                                            <TableCell>
                                                {batch.batch}
                                            </TableCell>
                                            <TableCell>
                                                {batch.date}
                                            </TableCell>
                                            <TableCell>
                                                {batch.country}
                                            </TableCell>
                                            <TableCell>
                                                KK
                                            </TableCell>
                                            <TableCell width="10%" align="center">
                                                <IconButton onClick={() => openBatchDialog("delete", batch)}>
                                                    <Delete color="error"/>
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => openBatchDialog("edit", batch)}
                                                >
                                                    <Edit color="primary"/>
                                                </IconButton>
                                            </TableCell>
                                        </CustomTableRow>
                                    ))
                                    : <TableRow>
                                        <TableCell colSpan={5}>
                                            <InfoAlert>
                                                Wygląda na to że produkt nie ma przypisanych partii
                                            </InfoAlert>
                                        </TableCell>
                                    </TableRow>
                        }
                    </TableBody>
                </Table>
            </Paper>

            {
                batchDialog.type === "delete" && (
                    <DeleteBatchDialog
                        open={batchDialog.open}
                        handleClose={handleCloseBatchDialog}
                        batch={batchDialog.value}
                    />
                )
            }

            {
                batchDialog.type === "edit" && (
                    <EditBatchDialog
                        open={batchDialog.open}
                        handleClose={handleCloseBatchDialog}
                        batch={batchDialog.value}
                    />
                )
            }

            {
                batchDialog.type === "create" && (
                    <CreateBatchDialog
                        open={batchDialog.open}
                        handleClose={handleCloseBatchDialog}
                    />
                )
            }
        </CustomTabPanel>
    );
};

export default ProductBatchesTabPanel;