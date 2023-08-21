import React from "react";
import CustomDialog from "@/components/dialog";
import {
    Button,
    DialogActions,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {Lock} from "@mui/icons-material";
import {useFormik} from "formik";
import {AccountLockValidationSchema} from "@/app/admin/accounts/accountLockValidationSchema";

const AdminAccountLockDialog = ({open, handleClose, account}) => {
    const formik = useFormik({
        initialValues: {
            reason: "",
            time: 900,
        },
        validationSchema: AccountLockValidationSchema,
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <CustomDialog
            open={open}
            handleClose={handleClose}
            title={`Zablokuj czasowo użytkownika - ${account.username}`}
        >
            <Typography variant="body2" sx={{marginBottom: 3}}>
                Po zablokowaniu użytkownik nie bedzie miał dostępu do aplikacji, podczas logowania użytkownik zostanie poinformowany o zablokowaniu konta
            </Typography>

            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <TextField
                    sx={{marginBottom: 3}}
                    fullWidth
                    name="reason"
                    label="Powód zablokowania"
                    onChange={formik.handleChange}
                    value={formik.values.reason}
                    error={formik.touched.reason && Boolean(formik.errors.reason)}
                    helperText={formik.touched.reason && (formik.errors.reason)}
                />

                <FormControl fullWidth sx={{marginBottom: 2}}>
                    <InputLabel id="select-account-lock-time">Zablokuj na</InputLabel>
                    <Select
                        labelId="select-account-lock-time"
                        name="time"
                        value={formik.values.time}
                        label="Zablokuj na"
                        error={formik.touched.time && Boolean(formik.errors.time)}
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={900}>15 minut</MenuItem>
                        <MenuItem value={3600}>1 godzina</MenuItem>
                        <MenuItem value={86400}>24 godziny</MenuItem>
                        <MenuItem value={1209600}>2 tygodnie</MenuItem>
                        <MenuItem value={-1}>Zablokuj na stałe</MenuItem>
                    </Select>
                    <FormHelperText sx={{color: "red"}} color="error">
                        {formik.touched.time && Boolean(formik.errors.time)}
                    </FormHelperText>
                </FormControl>

                <DialogActions>
                    <Button
                        color="primary"
                        onClick={() => handleClose(false)}
                    >
                        Anuluj
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        startIcon={<Lock />}
                    >
                        Zablokuj
                    </Button>
                </DialogActions>
            </form>
        </CustomDialog>
    );
};

export default AdminAccountLockDialog;