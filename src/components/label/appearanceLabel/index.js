import React, {useState} from "react";
import LabelAppearanceMenu from "@/components/label/appearanceLabel/menu";
import LabelAppearanceTextEditorMode from "@/components/label/appearanceLabel/textEditorMode";
import LabelAppearanceLabelView from "@/components/label/appearanceLabel/labelView";
import styled from "@emotion/styled";

const CenterDiv = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
}));

const AppearanceLabel = ({setLabelTextContent, labelTextContent}) => {
    const [textEditorContent, setTextEditorContent] = useState();
    const [labelContentId, setLabelContentId] = useState();
    const [textEditorMode, setTextEditorMode] = useState(false);
    const [display, setDisplay] = useState(false);
    const [showIconsForId, setShowIconsForId] = useState(false);

    return (
        <div>
            <CenterDiv>
                <LabelAppearanceMenu
                    display={display}
                    setDisplay={setDisplay}
                    setTextEditorContent={setTextEditorContent}
                    setTextEditorMode={setTextEditorMode}
                />

                <LabelAppearanceTextEditorMode
                    display={display}
                    setDisplay={setDisplay}
                    setTextEditorContent={setTextEditorContent}
                    setTextEditorMode={setTextEditorMode}
                    setLabelTextContent={setLabelTextContent}
                    labelTextContent={labelTextContent}
                    labelContentId={labelContentId}
                    setLabelContentId={setLabelContentId}
                    textEditorContent={textEditorContent}
                    textEditorMode={textEditorMode}
                />
            </CenterDiv>

            <CenterDiv>
                <LabelAppearanceLabelView
                    labelTextContent={labelTextContent}
                    setDisplay={setDisplay}
                    setTextEditorContent={setTextEditorContent}
                    setTextEditorMode={setTextEditorMode}
                    setLabelTextContent={setLabelTextContent}
                    setLabelContentId={setLabelContentId}
                    setShowIconsForId={setShowIconsForId}
                    showIconsForId={showIconsForId}
                />
            </CenterDiv>
        </div>
    );
};

export default AppearanceLabel;