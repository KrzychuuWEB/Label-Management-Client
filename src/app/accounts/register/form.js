import React, {useState} from "react";
import FormSkeleton from "@/components/form/formSkeleton";
import CustomTextField from "@/components/form/customTextField";
import {Button, IconButton, InputAdornment} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import FlexEndButtons from "@/components/button/flexEndButtons";

const RegisterForm = ({formik}) => {
    const [showPassword, setShowPassword] = useState({
        password: false,
        repeatPassword: false
    });

    const changeShowPassword = (name) => {
        setShowPassword(prevState => ({...prevState, [name]: !prevState[name]}))
    };

    return (
        <FormSkeleton formik={formik}>
            <CustomTextField
                formik={formik}
                label="Nazwa użytkownika"
                name="username"
            />

            <CustomTextField
                formik={formik}
                label="Email"
                name="email"
            />

            <CustomTextField
                formik={formik}
                label="Nazwa użytkownika"
                name="username"
            />

            <CustomTextField
                formik={formik}
                label="Hasło"
                name="password"
                type={showPassword.password ? 'text' : 'password'}
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
            />

            <CustomTextField
                formik={formik}
                label="Powtórz hasło"
                name="repeatPassword"
                type={showPassword.repeatPassword ? 'text' : 'password'}
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
            />

            <FlexEndButtons>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Zarejestruj się
                </Button>
            </FlexEndButtons>
        </FormSkeleton>
    );
};

export default RegisterForm;