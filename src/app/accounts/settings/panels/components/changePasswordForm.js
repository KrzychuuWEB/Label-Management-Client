import React, {useState} from "react";
import FormSkeleton from "@/components/form/formSkeleton";
import CustomTextField from "@/components/form/customTextField";
import FlexEndButtons from "@/components/button/flexEndButtons";
import {Button, IconButton, InputAdornment} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const ChangePasswordForm = ({formik}) => {
    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        repeatNewPassword: false
    });

    const changeShowPassword = (name) => {
        setShowPassword(prevState => ({...prevState, [name]: !prevState[name]}))
    };

    return (
        <FormSkeleton formik={formik}>
            <CustomTextField
                formik={formik}
                label="Stare hasło"
                name="oldPassword"
                type={showPassword.oldPassword ? 'text' : 'password'}
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
            />

            <CustomTextField
                formik={formik}
                label="Nowe hasło"
                name="newPassword"
                type={showPassword.newPassword ? 'text' : 'password'}
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
            />

            <CustomTextField
                formik={formik}
                label="Powótrz nowe hasło"
                name="repeatNewPassword"
                type={showPassword.repeatNewPassword ? 'text' : 'password'}
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
            />

            <FlexEndButtons>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Zmień hasło
                </Button>
            </FlexEndButtons>
        </FormSkeleton>
    );
};

export default ChangePasswordForm;