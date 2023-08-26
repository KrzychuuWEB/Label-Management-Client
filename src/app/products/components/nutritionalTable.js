import React from "react";
import {Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import {getIn} from "formik";

const NutritionalTableForForm = ({
                                     formik,
                                     nutritionalValues,
                                     setNutritionalValues
                                 }) => {
    const getCheckedNutritionalValuesCount = () => {
        let count = 0;

        nutritionalValues.map(item => {
            if (item.checked) {
                count++;
            }
        })

        return count;
    }

    const isChecked = (id) => {
        let checked = false;

        nutritionalValues.map(item => {
            if (item.id === id) {
                checked = item.checked;
            }
        });

        return checked;
    };

    const handleChangeCheckbox = (id) => {
        const updateState = [...nutritionalValues];
        let itemPriorityToChange = false;
        let childStatus = false;
        let removeCheckbox = false;

        updateState.map(item => {
            if (item.id === id) {
                item.checked = !item.checked;

                if (getAllNutritionalValuesChilds(nutritionalValues, item.priority).length > 0) {
                    childStatus = item.checked;
                    itemPriorityToChange = changePriorityFromDecimalToInteger(item.priority);
                }

                if (getAllNutritionalValuesChilds(nutritionalValues, item.priority + 0.1) && !item.checked) {
                    removeCheckbox = getAllNutritionalValuesChilds(nutritionalValues, item.priority + 0.1);
                }
            }
        })

        if (itemPriorityToChange > 0) {
            updateState.map(item => {
                if (item.priority === itemPriorityToChange && childStatus) {
                    item.checked = true
                }
            })
        }

        if (removeCheckbox.length > 0) {
            for (let x = 0; x < removeCheckbox.length; x++) {
                for (let i = 0; i < updateState.length; i++) {
                    if (updateState[i].priority === removeCheckbox[x]) {
                        updateState[i].checked = false;
                    }
                }
            }
        }

        setNutritionalValues(updateState);
    };

    const handleChangeCheckboxAll = (e) => {
        const updateState = [...nutritionalValues];

        updateState.map(item => {
            item.checked = e.target.checked;
        })

        setNutritionalValues(updateState);
    };

    const changePriorityFromDecimalToInteger = (priority) => {
        let subStringNumber = priority.toString().substring(0, 1);
        let number = parseInt(subStringNumber);

        return !Number.isInteger(priority) ? number : false;
    };

    const getAllNutritionalValuesChilds = (nutritionalValues, priority) => {
        let count = [];

        nutritionalValues.map(value => {
            if ((changePriorityFromDecimalToInteger(value.priority) === changePriorityFromDecimalToInteger(priority)) && !Number.isInteger(value.priority)) {
                count.push(value.priority);
            }
        });

        return count;
    }

    return (
        <TableContainer>
            <Table sx={{minWidth: 450}}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Checkbox
                                checked={nutritionalValues.length === getCheckedNutritionalValuesCount()}
                                onChange={handleChangeCheckboxAll}
                                indeterminate={getCheckedNutritionalValuesCount() > 0 && nutritionalValues.length !== getCheckedNutritionalValuesCount()}
                            />
                        </TableCell>
                        <TableCell>Nazwa wartości odżywczej</TableCell>
                        <TableCell>Wartość</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        nutritionalValues.map(item => (
                            <TableRow
                                hover
                                role="checkbox"
                                aria-checked={isChecked(item.id)}
                                tabIndex={-1}
                                key={item.id}
                                selected={isChecked(item.id)}
                                sx={{cursor: 'pointer'}}
                            >
                                <TableCell onClick={() => handleChangeCheckbox(item.id)} padding="checkbox"
                                           align="center">
                                    <Checkbox
                                        checked={isChecked(item.id)}
                                    />
                                </TableCell>
                                <TableCell onClick={() => handleChangeCheckbox(item.id)}
                                           align="left">{item.name}
                                </TableCell>
                                <TableCell align="right">
                                    {
                                        formik.values.nutritionalValues.map((value, index) => {
                                            if (value.id === item.id) {
                                                const touchedValue = getIn(formik.touched, `nutritionalValues[${index}].value`);
                                                const errorValue = getIn(formik.errors, `nutritionalValues[${index}].value`);

                                                return (
                                                    <TextField
                                                        key={value.id}
                                                        id={`nutritionalValues.${index}.value`}
                                                        label="Wprowadź wartość"
                                                        value={value.value}
                                                        onChange={formik.handleChange}
                                                        error={touchedValue && Boolean(errorValue)}
                                                        helperText={touchedValue && errorValue}
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default NutritionalTableForForm;