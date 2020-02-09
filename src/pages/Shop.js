import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Shop extends React.Component {

  render(){
  return (
        <React.Fragment>

        <div><h1>Shop for Others</h1></div>

        <Typography paragraph>
          Welcome to version one of the application.
        </Typography>

        <Button 
        
        onClick={this.props.broker.submit} color="primary">
          Ready
        </Button>

        <Button onClick={this.props.broker.submit} color="primary">
          Submit
        </Button>

        </React.Fragment>
    );
  }
}

export default Shop;