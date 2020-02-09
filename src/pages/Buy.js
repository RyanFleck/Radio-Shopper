import React from 'react';
import PubSub from '../components/PubSub';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Buy extends React.Component {
  constructor(props){
    super(props);
    this.broker = new PubSub();
  }
  render() {
  return (
        <React.Fragment>

        <div><h1>Buy for Yourself</h1></div>

        <Typography paragraph>
          Welcome to version one of the application.
        </Typography>

        <Button onClick={PubSub.connect.call(this.broker)} color="primary">
          Shopping
        </Button>

        <Button onClick={PubSub.submit} color="primary">
          Submit
        </Button>

        </React.Fragment>
    );
  }
}

export default Buy;