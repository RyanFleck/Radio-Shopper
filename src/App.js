import React from 'react';
import './App.css';

import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/* Material UI Components */
import CssBaseline from '@material-ui/core/CssBaseline';


/* From components folder */
import Nav from './components/Nav';
import PubSub from './components/PubSub';

/* From pages folder */
import Login from './pages/Login';
import Shop from './pages/Shop';
import Buy from './pages/Buy';
import Home from './pages/Home';
import About from './pages/About';
import { render } from '@testing-library/react';

import Container from '@material-ui/core/Container';

import messaging from "./Messaging";
import Paho from "paho-mqtt";

const app_name = "Shop N' Buy";

const broker = () => { console.log("F"); }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      messages: []
    };
    messaging.register(this.handleMessage.bind(this));
    this.handleConnectClick()
  }



  render() {
    const connected = this.state.connected;
    const sendButton = connected ? <button onClick={() => this.handleSendClick()}>Send</button> : <button disabled>Send</button>;
    return (
      <Router>
        <CssBaseline />
        <Nav title={app_name} >
          <Container maxWidth="md">

            <Switch>
              <Route exact path="/">
                <Login />
              </Route>

              <Route exact path="/shop">
                <Shop data={this.state.messages} messaging={messaging} />
              </Route>

              <Route path="/home">
                <Home data={this.state.messages} messaging={messaging} />
              </Route>

              <Route path="/buy">
                <Buy data={this.state.messages} messaging={messaging} />
              </Route>

              <Route path="/about">
                <About />
              </Route>

            </Switch>
          </Container>
        </Nav>
      </Router>
    );
  }

  handleMessage(message) {
    this.setState(state => {
      const messages = state.messages.concat(message.payloadString);
      return {
        messages,
        connected: state.connected,
      };
    });
  }

  handleSendClick() {
    let message = new Paho.Message(JSON.stringify({ text: "Hello" }));
    message.destinationName = "exampletopic";
    messaging.send(message);
  }

  handleConnectClick() {
    if (this.state.connected) {
      messaging.disconnect();
      this.setState({
        connected: false,
        messages: this.state.messages
      });
    } else {
      messaging.connectWithPromise().then(response => {
        console.log("Succesfully connected to Solace Cloud.", response);
        messaging.subscribe("exampletopic");
        this.setState({
          connected: true,
          messages: this.state.messages
        });
      }).catch(error => {
        console.log("Unable to establish connection with Solace Cloud, see above logs for more details.", error);
      });
    }
  }

}

export default App;
