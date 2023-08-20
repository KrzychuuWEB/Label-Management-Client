"use client"

import React, {useState} from "react";
import BoxWithLogo from "@/components/box/withLogo";
import {useFormik} from "formik";
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import styled from "@emotion/styled";
import {registerValidationSchema} from "@/app/accounts/register/formValid";

const ActionButton = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));

const AccountRegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <div>
            <BoxWithLogo
                title="Zarejestruj się"
            >
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <TextField
                        sx={{marginBottom: 3}}
                        fullWidth
                        name="email"
                        label="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && (formik.errors.email)}
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

                    <TextField
                        sx={{marginBottom: 3}}
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        name="repeatPassword"
                        label="Powtórz hasło"
                        onChange={formik.handleChange}
                        value={formik.values.repeatPassword}
                        error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                        helperText={formik.touched.repeatPassword && (formik.errors.repeatPassword)}
                    />

                    <ActionButton>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Zarejestruj się
                        </Button>
                    </ActionButton>
                </form>
            </BoxWithLogo>
        </div>
    );
};

export default AccountRegisterPage;