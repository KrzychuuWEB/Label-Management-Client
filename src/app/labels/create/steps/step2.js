"use client"

import React, {useState} from "react";
import styled from "@emotion/styled";
import {IconButton, Tooltip, Typography} from "@mui/material";
import {
    AddPhotoAlternate,
    ArrowBack,
    BugReport,
    CropRotate,
    Edit,
    Extension,
    OpenWith,
    TextFields
} from "@mui/icons-material";
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import TextEditor from "@/components/textEditor/editor";
import Draggable from "react-draggable";
import LabelTemplate from "@/components/labelTemplate/labelTemplate";

const editorMode = {
    edit: "edit",
    create: "create",
};

const displayMode = {
    textEditor: "textEditor",
    addExtension: "addExtension",
    uploadImage: "uploadImage",
};

const CenterDiv = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
}));

const Menu = styled('div')(() => ({
    marginBottom: 25,
}));

const CreateLabelStep2 = () => {
    const [labelTextContent, setLabelTextContent] = useState([]);
    const [textEditorContent, setTextEditorContent] = useState();
    const [labelContentId, setLabelContentId] = useState();
    const [textEditorMode, setTextEditorMode] = useState(false);
    const [display, setDisplay] = useState(false);
    const [showIconsForId, setShowIconsForId] = useState(false);

    const getPosition = (event, dragElement, itemId) => {
        const stateToUpdate = [...labelTextContent];
        stateToUpdate.map(item => {
            if (item.id === itemId) {
                item.x = dragElement.x;
                item.y = dragElement.y;
            }
            return item;
        });

        setLabelTextContent(stateToUpdate);
    };

    return (
        <div>
            <CenterDiv>
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

                                <IconButton
                                    color="secondary"
                                    onClick={() => {
                                        console.log(labelTextContent);
                                    }}
                                >
                                    <BugReport/>
                                </IconButton>
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

                {
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
                }
            </CenterDiv>

            <CenterDiv>
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
                                        <Typography variant="headline">
                                            {parse(item.text)}
                                        </Typography>

                                        {
                                            showIconsForId === item.id && (
                                                <div>
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
                                    </div>
                                </Draggable>
                            ))
                        )
                    }
                </LabelTemplate>
            </CenterDiv>

        </div>
    );
};

export default CreateLabelStep2;