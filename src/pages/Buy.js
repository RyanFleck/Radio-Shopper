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

        <Button onClick={this.props.broker.submit}color="primary">
          Shopping
        </Button>

        <Button onClick={this.props.broker.submit} color="primary">
          Submit
        </Button>


        <div class="buttons">
          {sendButton}
        </div>
        <ol>
          {this.state.messages.map((message, index) => {
            return <li key={index}>{message}</li>
          })}
        </ol>

      </React.Fragment>
    );
  }
}

export default Buy;