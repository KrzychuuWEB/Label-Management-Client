"use client"

import AppearanceLabel from "src/components/label/appearanceLabel";

const CreateLabelStep2 = ({labelTextContent, setLabelTextContent}) => {
    return (
        <AppearanceLabel labelTextContent={labelTextContent} setLabelTextContent={setLabelTextContent}/>
    );
};

export default CreateLabelStep2;