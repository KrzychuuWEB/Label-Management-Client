import React, {useState} from "react";
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useFormik} from "formik";
import styled from "@emotion/styled";
import {changePasswordValidationSchema} from "@/app/accounts/settings/formValid/changePasswordFormValid";

const ButtonDiv = styled('div')(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));

const AccountSettingsChangePasswordTabPanel = () => {
    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        repeatNewPassword: false
    });

    const changeShowPassword = (name) => {
        setShowPassword(prevState => ({...prevState, [name]: !prevState[name]}))
    };

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            repeatNewPassword: "",
        },
        validationSchema: changePasswordValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <FormControl fullWidth sx={{marginBottom: 3}}>
                <InputLabel htmlFor="oldPassword">Stare hasło</InputLabel>
                <OutlinedInput
                    fullWidth
                    name="oldPassword"
                    type={showPassword.oldPassword ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    value={formik.values.oldPassword}
                    error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Stare hasło"
                                onClick={() => changeShowPassword("oldPassword")}
                                edge="end"
                            >
                                {showPassword.oldPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="stare hasło"
                />
                <FormHelperText sx={{color: "red"}} color="error">
                    {formik.touched.oldPassword && (formik.errors.oldPassword)}
                </FormHelperText>
            </FormControl>

            <FormControl fullWidth sx={{marginBottom: 3}}>
                <InputLabel htmlFor="newPassword">Nowe hasło</InputLabel>
                <OutlinedInput
                    fullWidth
                    name="newPassword"
                    type={showPassword.newPassword ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                    error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Nowe hasło"
                                onClick={() => changeShowPassword("newPassword")}
                                edge="end"
                            >
                                {showPassword.newPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Nowe hasło"
                />
                <FormHelperText sx={{color: "red"}} color="error">
                    {formik.touched.newPassword && (formik.errors.newPassword)}
                </FormHelperText>
            </FormControl>

            <FormControl fullWidth sx={{marginBottom: 3}}>
                <InputLabel htmlFor="repeatNewPassword">Powtórz nowe hasło</InputLabel>
                <OutlinedInput
                    fullWidth
                    name="repeatNewPassword"
                    type={showPassword.repeatNewPassword ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    value={formik.values.repeatNewPassword}
                    error={formik.touched.repeatNewPassword && Boolean(formik.errors.repeatNewPassword)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Powtórz nowe hasło"
                                onClick={() => changeShowPassword("repeatNewPassword")}
                                edge="end"
                            >
                                {showPassword.repeatNewPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Powtórz nowe hasło"
                />
                <FormHelperText sx={{color: "red"}} color="error">
                    {formik.touched.repeatNewPassword && (formik.errors.repeatNewPassword)}
                </FormHelperText>
            </FormControl>

            <ButtonDiv>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Zmień hasło
                </Button>
            </ButtonDiv>
        </form>
    );
};

export default AccountSettingsChangePasswordTabPanel;