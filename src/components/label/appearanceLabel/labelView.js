import React from "react";
import Draggable from "react-draggable";
import {IconButton} from "@mui/material";
import {displayMode, editorMode} from "@/components/label/appearanceLabel/constants";
import {Edit, OpenWith} from "@mui/icons-material";
import LabelTemplate from "@/components/labelTemplate/labelTemplate";
import LabelDetail from "@/components/label/labelDetail";

const LabelAppearanceLabelView = ({
                                      labelTextContent,
                                      setLabelTextContent,
                                      setShowIconsForId,
                                      showIconsForId,
                                      setLabelContentId,
                                      setTextEditorContent,
                                      setTextEditorMode,
                                      setDisplay
                                  }) => {
    const getPosition = (event, dragElement, itemId) => {
        const stateToUpdate = [...labelTextContent];
        stateToUpdate.map(item => {
            if (item.id === itemId) {
                item.x = dragElement.x;
                item.y = dragElement.y;
            }
            return item;
        });

        console.log(labelTextContent)
        setLabelTextContent(stateToUpdate);
    };

    return (
        <LabelTemplate
            width={298}
            height={420}
            isPresentation={true}
        >
            {
                labelTextContent.length > 0 && (
                    labelTextContent.map(item => (
                        <Draggable
                            key={item.id}
                            bounds="parent"
                            handle=".change-position"
                            position={{x: item.x, y: item.y}}
                            onStop={(event, dragElement) =>
                                getPosition(event, dragElement, item.id)
                            }
                        >
                            <div
                                onMouseEnter={() => setShowIconsForId(item.id)}
                                onMouseLeave={() => setShowIconsForId(null)}
                                style={{position: "absolute"}}
                            >
                                <LabelDetail detail={item} withoutStyle>
                                    {
                                        showIconsForId === item.id && (
                                            <div style={{position: "absolute"}}>
                                                <IconButton
                                                    onClick={() => {
                                                        setLabelContentId(item.id)
                                                        setTextEditorContent(item.text)
                                                        setTextEditorMode(editorMode.edit)
                                                        setDisplay(displayMode.textEditor)
                                                    }}
                                                >
                                                    <Edit fontSize="small"/>
                                                </IconButton>

                                                <IconButton className="change-position">
                                                    <OpenWith fontSize="small"/>
                                                </IconButton>
                                            </div>
                                        )
                                    }
                                </LabelDetail>
                            </div>
                        </Draggable>
                    ))
                )
            }
        </LabelTemplate>
    );
};

export default LabelAppearanceLabelView;