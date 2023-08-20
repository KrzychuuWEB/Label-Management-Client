import React, {useState} from "react";
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import styled from "@emotion/styled";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const ActionButtons = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));

const LoginForm = ({formik, actionButtons}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                sx={{marginBottom: 3}}
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && (formik.errors.email)}
                fullWidth
            />

            <FormControl fullWidth sx={{marginBottom: 3}}>
                <InputLabel htmlFor="password">Hasło</InputLabel>
                <OutlinedInput
                    fullWidth
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Pokaż hasło"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Hasło"
                />
                <FormHelperText sx={{color: "red"}} color="error">
                    {formik.touched.password && (formik.errors.password)}
                </FormHelperText>
            </FormControl>

            <ActionButtons>
                {actionButtons}
            </ActionButtons>
        </form>
    );
};

export default LoginForm;