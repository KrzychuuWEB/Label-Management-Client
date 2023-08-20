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
    const [showPassword, setShowPassword] = useState({
        password: false,
        repeatPassword: false
    });

    const changeShowPassword = (name) => {
        setShowPassword(prevState => ({...prevState, [name]: !prevState[name]}))
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div>
            <BoxWithLogo
                title="Zarejestruj się"
            >
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <TextField
                        sx={{marginBottom: 3}}
                        fullWidth
                        name="username"
                        label="Nazwa użytkownika / firmy"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && (formik.errors.username)}
                    />

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
                            type={showPassword.password ? 'text' : 'password'}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Pokaż hasło"
                                        onClick={() => changeShowPassword("password")}
                                        edge="end"
                                    >
                                        {showPassword.password ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Hasło"
                        />
                        <FormHelperText sx={{color: "red"}} color="error">
                            {formik.touched.password && (formik.errors.password)}
                        </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth sx={{marginBottom: 3}}>
                        <InputLabel htmlFor="password">Powtórz hasło</InputLabel>
                        <OutlinedInput
                            fullWidth
                            name="repeatPassword"
                            type={showPassword.repeatPassword ? 'text' : 'password'}
                            onChange={formik.handleChange}
                            value={formik.values.repeatPassword}
                            error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Pokaż hasło"
                                        onClick={() => changeShowPassword("repeatPassword")}
                                        edge="end"
                                    >
                                        {showPassword.repeatPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Powtórz hasło"
                        />
                        <FormHelperText sx={{color: "red"}} color="error">
                            {formik.touched.repeatPassword && (formik.errors.repeatPassword)}
                        </FormHelperText>
                    </FormControl>

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