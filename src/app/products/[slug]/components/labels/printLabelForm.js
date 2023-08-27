import React, {useEffect, useState} from "react";
import InitialSelectInput from "@/app/products/[slug]/components/initialSelectInput";
import {initialsTable} from "@/inMemoryDatabase/initials";

const PrintLabelForm = ({children, formik}) => {
    const [initials, setInitials] = useState([]);

    useEffect(() => {
        setInitials(initialsTable);
    }, []);

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <InitialSelectInput
                formik={formik}
                initials={initials}
            />

            {children}
        </form>
    );
};

export default PrintLabelForm;