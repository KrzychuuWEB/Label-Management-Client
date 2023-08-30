import React from "react";
import TextEditor from "@/components/textEditor/editor";
import {displayMode, editorMode} from "@/components/label/appearanceLabel/constants";

const LabelAppearanceTextEditorMode = ({
                                           display,
                                           textEditorMode,
                                           labelContentId,
                                           labelTextContent,
                                           setLabelTextContent,
                                           textEditorContent,
                                           setTextEditorContent,
                                           setDisplay,
                                           setTextEditorMode,
                                           setLabelContentId,
                                       }) => {
    return (
        (display === displayMode.textEditor && textEditorMode) && (
            <div style={{width: "100%"}}>
                {
                    (textEditorMode === editorMode.create) && (
                        <TextEditor
                            labelTextContent={labelTextContent}
                            setLabelTextContent={setLabelTextContent}
                            labelContentId={false}
                            setLabelContentId={false}
                            textEditorContent={textEditorContent}
                            setTextEditorContent={setTextEditorContent}
                            setTextEditorMode={setTextEditorMode}
                            setDisplay={setDisplay}
                        />
                    )
                }

                {
                    (textEditorMode === editorMode.edit && labelContentId) && (
                        <TextEditor
                            labelTextContent={labelTextContent}
                            setLabelTextContent={setLabelTextContent}
                            labelContentId={labelContentId}
                            setLabelContentId={setLabelContentId}
                            textEditorContent={textEditorContent}
                            setTextEditorContent={setTextEditorContent}
                            setDisplay={setDisplay}
                        />
                    )
                }
            </div>
        )
    );
};

export default LabelAppearanceTextEditorMode;