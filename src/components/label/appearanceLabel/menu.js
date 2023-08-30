import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import {AddPhotoAlternate, ArrowBack, CropRotate, Extension, TextFields} from "@mui/icons-material";
import {displayMode, editorMode} from "@/components/label/appearanceLabel/constants";
import styled from "@emotion/styled";

const Menu = styled('div')(() => ({
    marginBottom: 25,
}));

const LabelAppearanceMenu = ({setTextEditorMode, setDisplay, setTextEditorContent, display}) => {
    return (
        <div>
            <Menu>
                {
                    display === false && (
                        <div>
                            <Tooltip title="Dodaj tekst">
                                <IconButton
                                    color="primary"
                                    onClick={() => {
                                        setTextEditorMode(editorMode.create)
                                        setDisplay(displayMode.textEditor);
                                        setTextEditorContent("");
                                    }}
                                >
                                    <TextFields/>
                                </IconButton>
                            </Tooltip>

                            {/*<Tooltip title="Dodaj funkcje">*/}
                            <IconButton color="primary" disabled>
                                <Extension/>
                            </IconButton>
                            {/*</Tooltip>*/}

                            {/*<Tooltip title="Dodaj obrazek">*/}
                            <IconButton color="primary" disabled>
                                <AddPhotoAlternate/>
                            </IconButton>
                            {/*</Tooltip>*/}

                            {/*<Tooltip title="Obróć element">*/}
                            <IconButton color="primary" disabled>
                                <CropRotate/>
                            </IconButton>
                            {/*</Tooltip>*/}
                        </div>
                    )
                }
                {
                    display && (
                        <div>
                            <IconButton
                                color="primary"
                                onClick={() => {
                                    setDisplay(false)
                                }}
                            >
                                <ArrowBack/>
                            </IconButton>
                        </div>
                    )
                }
            </Menu>
        </div>
    );
};

export default LabelAppearanceMenu;