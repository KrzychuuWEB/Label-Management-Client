import React from "react";
import {TextField} from "@mui/material";
import styled from "@emotion/styled";

const ActionButtons = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20
}));

const LoginForm = ({formik, actionButtons}) => {
    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                id="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && (formik.errors.email)}
                fullWidth
            />

            <TextField
                id="password"
                label="Hasło"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && (formik.errors.password)}
                fullWidth
                sx={{marginTop: 3}}
            />

            <ActionButtons>
                {actionButtons}
            </ActionButtons>
        </form>
    );
};

export default LoginForm;