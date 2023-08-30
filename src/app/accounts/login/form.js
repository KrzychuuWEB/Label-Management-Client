import React, {useState} from "react";
import {IconButton, InputAdornment} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import FlexEndButtons from "@/components/button/flexEndButtons";
import FormSkeleton from "@/components/form/formSkeleton";
import CustomTextField from "@/components/form/customTextField";

const LoginForm = ({formik, actionButtons}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <FormSkeleton formik={formik}>
            <CustomTextField
                formik={formik}
                name="email"
                label="Email"
            />

            <CustomTextField
                formik={formik}
                name="password"
                label="Hasło"
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
                type={showPassword ? 'text' : 'password'}
            />

            <FlexEndButtons>
                {actionButtons}
            </FlexEndButtons>
        </FormSkeleton>
    );
};

export default LoginForm;