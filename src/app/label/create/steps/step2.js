"use client"

import React, {useState} from "react";
import styled from "@emotion/styled";
import {Button, IconButton, Typography} from "@mui/material";
import {Edit} from "@mui/icons-material";
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import TextEditor from "@/components/textEditor/editor";

const RootElement = styled('div')(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    " > div": {
        width: "49%",
    },
}));

const editorMode = {
    edit: "edit",
    create: "create",
};

const CreateLabelStep2 = () => {
    const [labelTextContent, setLabelTextContent] = useState([]);
    const [textEditorContent, setTextEditorContent] = useState();
    const [labelContentId, setLabelContentId] = useState();
    const [textEditorMode, setTextEditorMode] = useState();

    return (
        <RootElement>
            <div>
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
                        />
                    )
                }

                <Button
                    onClick={() => {
                        setTextEditorMode(editorMode.create)
                        setTextEditorContent("");
                    }}
                >Dodaj tekst</Button>
            </div>

            <div>
                {
                    labelTextContent.length > 0 && (
                        labelTextContent.map(item => (
                            <div key={item.id} style={{display: "flex"}}>
                                <Typography variant="headline">
                                    {parse(item.text)}
                                </Typography>

                                <IconButton
                                    onClick={() => {
                                        setLabelContentId(item.id)
                                        setTextEditorContent(item.text)
                                        setTextEditorMode(editorMode.edit)
                                    }}
                                >
                                    <Edit/>
                                </IconButton>
                            </div>
                        ))
                    )
                }
            </div>
        </RootElement>
    );
};

export default CreateLabelStep2;