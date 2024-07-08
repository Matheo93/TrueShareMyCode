import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper } from '@mui/material';
import { CodeContext } from './CodeContext';

const CodeView = () => {
    const { id } = useParams();
    const codeId = Number(id); // Convert id to a number
    const { codes } = useContext(CodeContext);

    useEffect(() => {
        console.log('Code ID:', codeId); // Log to verify id
        console.log('Codes array:', codes); // Log to verify the codes array
    }, [codeId, codes]);

    const code = codes.find(c => c.id === codeId);
    console.log('Found code:', code); // Log to verify found code

    if (!code) return <div>Code not found</div>;

    return (
        <Container>
            <Typography variant="h4">{code.title}</Typography>
            <Paper style={{ padding: '20px', marginTop: '20px', whiteSpace: 'pre-wrap' }}>
                {code.content}
            </Paper>
        </Container>
    );
};

export default CodeView;