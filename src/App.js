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

const app_name = "Shop N' Buy"

function App() {

  PubSub.initPubSub()

  return (
    <Router>
      <CssBaseline />
      <Nav title={app_name} >

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/shop">
            <Shop />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/buy">
            <Buy />
          </Route>

          <Route path="/about">
            <About />
          </Route>

        </Switch>

      </Nav>
    </Router>
  );
}

export default App;
