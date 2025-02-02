// CodeEditor.js
import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useCodeContext } from "./CodeContext";

const CodeEditor = () => {
  const { addCode } = useCodeContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (title && content) {
      const newCode = { id: uuidv4(), title, content };
      await addCode(newCode);
      navigate(`/code/${newCode.id}`);
    }
  };

  return (
    <Container maxWidth="sm">
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mt: 3 }}
      />
      <TextField
        multiline
        rows={8}
        label="Code Content"
        fullWidth
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ mt: 3 }}
      />
      <Button variant="contained" size="large" onClick={handleSubmit} sx={{ mt: 3 }}>
        Submit
      </Button>
    </Container>
  );
};

export default CodeEditor;