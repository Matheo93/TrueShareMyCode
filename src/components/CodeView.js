
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CodeContext } from './CodeContext';

const CodeView = () => {
  const { id } = useParams();
  const codeId = Number(id);
  const { codes } = useContext(CodeContext);

  useEffect(() => {
    console.log('Code ID:', codeId);
    console.log('Codes array:', codes);
  }, [codeId, codes]);

  const code = codes.find((c) => c.id === codeId);

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