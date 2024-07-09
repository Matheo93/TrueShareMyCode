import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import { useCodeContext } from "./CodeContext";

const Home = () => {
  const { codes } = useCodeContext();

  return (
    <Container>
      <List>
        {codes.map((code) => (
          <ListItem
            button
            component={Link}
            to={`/code/${code.id}`}
            key={code.id}
          >
            <ListItemText primary={code.title}></ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Home;