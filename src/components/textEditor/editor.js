"use client"

import React from "react";
import ReactQuill from "react-quill";
import {Button} from "@mui/material";

const TextEditor = ({
                        labelTextContent,
                        setLabelTextContent,
                        labelContentId,
                        setLabelContentId,
                        textEditorContent,
                        setTextEditorContent,
                        setTextEditorMode
                    }) => {
    const handleEditorChange = (content) => {
        setTextEditorContent(content);

        if (labelContentId) {
            const stateToUpdate = [...labelTextContent];

            stateToUpdate.map(item => {
                if (item.id === labelContentId) {
                    item.text = content;
                }
                return item;
            });

            setLabelTextContent(stateToUpdate);
        }
    };

    const addNewTextToState = () => {
        setLabelTextContent(prevState => ([
            ...prevState, {
                id: prevState.length + 1,
                text: textEditorContent,
            }
        ]));

        setTextEditorMode(false);
    };

    const closeEditMode = () => {
        setLabelContentId(false);
    }

    return (
        <div>
            <ReactQuill
                value={textEditorContent}
                onChange={handleEditorChange}
                modules={{
                    toolbar: ["bold"]
                }}
                theme="snow"
            />
            {
                !labelContentId && (
                    <Button
                        onClick={() => {
                            addNewTextToState()
                        }}
                    >
                        Dodaj tekst
                    </Button>
                )
            }

            {
                labelContentId && (
                    <Button
                        onClick={() => {
                            closeEditMode()
                        }}
                    >
                        Zakończ edytowanie
                    </Button>
                )
            }
        </div>
    );
};

export default TextEditor;