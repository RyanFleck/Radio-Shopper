import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


class Buy extends React.Component {

  render(props) {
    return (
      <React.Fragment>

        <div><h1>Buy for Yourself</h1></div>

        <Typography paragraph>
          Welcome to version one of the application.
        </Typography>

        <Button color="primary">
          Shopping
        </Button>

        <Button color="primary">
          Submit
        </Button>


      </React.Fragment>
    );
  }
}

export default Buy;