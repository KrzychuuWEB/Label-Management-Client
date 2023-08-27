import React from "react";
import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import styled from "@emotion/styled";
import LoadingTable from "@/components/loading/table";
import CustomTableRow from "@/components/tables/customTableRow";
import InfoAlert from "@/components/alerts/infoAlert";

const CustomPaper = styled(Paper)(() => ({
    width: "49%"
}));

const NutritionalTableValues = ({product, isLoading}) => {
    return (
        <CustomPaper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nazwa</TableCell>
                        <TableCell align="right">Wartość</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        isLoading
                            ? <LoadingTable cellCount={2}/>
                            : product.nutritionalValues.length > 0
                                ? product.nutritionalValues.map(item => (
                                    <CustomTableRow key={item.id}>
                                        <TableCell>{item.nutritional_name_id.name}</TableCell>
                                        <TableCell align="right">{item.value}</TableCell>
                                    </CustomTableRow>
                                ))
                                : <TableRow>
                                    <TableCell colSpan={2}>
                                        <InfoAlert>
                                            Wygląda na to że produkt nie ma przypisanych wartości odżywczych
                                        </InfoAlert>
                                    </TableCell>
                                </TableRow>
                    }
                </TableBody>
            </Table>
        </CustomPaper>
    );
};

export default NutritionalTableValues;