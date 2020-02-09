import React from 'react';
import './App.css';

/* Material UI Components */
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

/* From components folder */
import Nav from './components/Nav';

const app_name = "B"

function App() {
  return (
   <React.Fragment>
    <CssBaseline />
        <Nav>

        <Typography paragraph>
        Testing
        </Typography>

        <Button variant="contained" color="primary">
            Hello World 
        </Button>

        </Nav>
   </React.Fragment> 
  );
}

export default App;
