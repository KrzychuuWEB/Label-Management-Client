import React, {useState} from "react";
import styled from "@emotion/styled";
import {Button, Skeleton, TextField} from "@mui/material";
import {useFormik} from "formik";
import {informationValidationSchema} from "@/app/accounts/settings/formValid/informationValidationSchema";

const ButtonDiv = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));


const AccountSettingsInformationPanel = ({user, isLoading}) => {
    const [editMode, setEditMode] = useState(false);

    const changeEditMode = () => {
        setEditMode(!editMode);
    };

    const formik = useFormik({
        initialValues: {
            username: user.username || "",
            email: user.email || "",
        },
        enableReinitialize: true,
        validationSchema: informationValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            {
                isLoading
                    ? <Skeleton height={50} sx={{marginBottom: 3}} width="100%" variant="rectangular"/>
                    : <TextField
                        disabled={!editMode}
                        fullWidth
                        sx={{marginBottom: 3}}
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        label="Nazwa użytkownika / firmy"
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && (formik.errors.username)}
                    />
            }

            {
                isLoading
                    ? <Skeleton height={50} sx={{marginBottom: 3}} width="100%" variant="rectangular"/>
                    : <TextField
                        disabled={!editMode}
                        fullWidth
                        sx={{marginBottom: 3}}
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        label="Email"
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && (formik.errors.email)}
                    />
            }

            <ButtonDiv>
                {
                    editMode
                        ? (
                            <div>
                                <Button
                                    color="primary"
                                    onClick={changeEditMode}
                                    sx={{marginRight: 2}}
                                >
                                    Anuluj
                                </Button>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Zmień dane
                                </Button>
                            </div>
                        )
                        : <Button
                            variant="outlined"
                            color="primary"
                            onClick={changeEditMode}
                        >
                            Zacznij edycję
                        </Button>
                }
            </ButtonDiv>
        </form>
    );
};

export default AccountSettingsInformationPanel;