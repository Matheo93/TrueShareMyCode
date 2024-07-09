import React from "react";
import { useParams } from "react-router-dom";
import { useCodeContext } from "./CodeContext";
import { Container, Typography, Paper } from "@mui/material";

const CodeView = () => {
  const { id } = useParams();
  const { codes } = useCodeContext();

  const currentCode = codes.find((code) => code.id === id);

  if (!currentCode) return <div>Code Not Found!</div>;

  return (
    <Container maxWidth="md">
      <Typography variant="h5" gutterBottom>{currentCode.title}</Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <pre>{currentCode.content}</pre>
      </Paper>
    </Container>
  );
};

export default CodeView;