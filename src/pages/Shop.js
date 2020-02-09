import React from 'react';
import PubSub from '../components/PubSub';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Shop extends React.Component {
  constructor(props){
    super(props);
    this.broker = new PubSub();
  }
  render(){
  return (
        <React.Fragment>

        <div><h1>Shop for Others</h1></div>

        <Typography paragraph>
          Welcome to version one of the application.
        </Typography>

        <Button 
        
        onClick={PubSub.connect} color="primary">
          Ready
        </Button>

        <Button onClick={PubSub.submit} color="primary">
          Submit
        </Button>

        <h1>
        {PubSub.state.messages.call(this.broker).map((message, index) => {
						return <li key={index}>{message}</li>
					})}</h1>

        </React.Fragment>
    );
  }
}

export default Shop;