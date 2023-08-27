"use client"

import React from "react";
import {useParams} from "next/navigation";

const GetLabelById = () => {
    const params = useParams();
    const labelId = params.id;

    return (
        <div>
            {labelId}
        </div>
    );
};

export default GetLabelById;