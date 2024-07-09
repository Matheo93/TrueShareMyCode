import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import { useCodeContext } from './CodeContext'; // Import useCodeContext from the same folder

const Home = () => {
  const { codes } = useCodeContext();

  return (
    <List>
      {codes.map((code, index) => (
        <ListItem button component={Link} to={`/code/${code.id}`} key={index}>
          <ListItemText primary={code.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default Home;