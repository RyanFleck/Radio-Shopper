import React from 'react';
import Store from '../components/Store';
import Typography from '@material-ui/core/Typography';

function Home(props) {
    return (
        <React.Fragment>

        <div><h1>Welcome to Shop n' Buy</h1></div>

        <Typography paragraph>
          Welcome to version one of the application.
          Here are store currently supported by Shop N' Buy
        </Typography>
        <Store>
        </ Store>

       </React.Fragment>
       
    );
}

export default Home;