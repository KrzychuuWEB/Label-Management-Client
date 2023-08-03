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
                        setTextEditorMode,
                        setDisplay,
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
                x: 0,
                y: 0,
            }
        ]));

        setTextEditorMode(false);
        setDisplay(false)
    };

    const closeEditMode = () => {
        setLabelContentId(false);
        setDisplay(false)
    }

    return (
        <div>
            <ReactQuill
                value={textEditorContent}
                onChange={handleEditorChange}
                modules={{
                    toolbar: ["bold", "italic", "underline", "strike"],
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
                        Dodaj
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
                        Edytuj
                    </Button>
                )
            }
        </div>
    );
};

export default TextEditor;