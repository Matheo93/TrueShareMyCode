import React, { useState, useContext, useHistory } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useCodeContext } from './CodeContext'; // Import useCodeContext from the same folder

const CodeEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addCode } = useCodeContext();
  const history = useHistory();

  const handleSubmit = () => {
    if (title && content) {
      addCode({ title, content });
      history.push(`/code/${codes.length + 1}`);
    }
  };

  return (
    <Container>
      {/* ... rest of the component remains the same ... */}
    </Container>
  );
};

export default CodeEditor;