import React from 'react';
import PubSub from '../components/PubSub';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Home(props) {
    return (
        <React.Fragment>

        <div><h1>Welcome to Shop n' Buy</h1></div>

        <Typography paragraph>
          Welcome to version one of the application.
        </Typography>

        <Button onClick={PubSub.actionOne} color="primary">
          PubSub Action One
        </Button>

        <Button onClick={PubSub.actionTwo} color="primary">
          PubSub Action Two
        </Button>

        </React.Fragment>
    );
}

export default Home;