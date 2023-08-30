import React from "react";

const FormSkeleton = ({children, formik}) => {
    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            {children}
        </form>
    );
};

export default FormSkeleton;