import React, { useState, useContext, useHistory } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { CodeContext } from '../../CodeContext';

const CodeEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addCode } = useContext(CodeContext);
  const history = useHistory();

  const handleSubmit = () => {
    if (title && content) {
      addCode({ title, content });
      history.push(`/code/${codes.length + 1}`);
    }
  };

  return (
    <Container>
      <TextField
        label="Title"
        fullWidth
        margin="normal"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        label="Code"
        multiline
        rows={10}
        fullWidth
        margin="normal"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Share Code
      </Button>
    </Container>
  );
};

export default CodeEditor;