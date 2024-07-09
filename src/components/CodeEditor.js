import React, { useState, useContext, useHistory } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useCodeContext } from './CodeContext';

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
      {/* Rest of the component goes here */}
    </Container>
  );
};

export default CodeEditor;
export { useCodeContext };