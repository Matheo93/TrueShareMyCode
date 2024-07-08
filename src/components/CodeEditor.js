import React, { useState, useContext, useEffect } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { CodeContext } from './CodeContext';
import { useNavigate } from 'react-router-dom';

const CodeEditor = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addCode, codes } = useContext(CodeContext);
    const navigate = useNavigate();
    const [navigateFlag, setNavigateFlag] = useState(false);

    const handleSubmit = () => {
        if (title && content) {
            addCode({ title, content });
            setNavigateFlag(true);
        }
    };

    useEffect(() => {
        if (navigateFlag) {
            navigate(`/code/${codes.length - 1}`);
            setNavigateFlag(false);
        }
    }, [codes, navigateFlag, navigate]);

    return (
        <Container>
            <TextField
                label="Title"
                fullWidth
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                label="Code"
                multiline
                rows={10}
                fullWidth
                margin="normal"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Share Code
            </Button>
        </Container>
    );
};

export default CodeEditor;