import React from 'react';
import Button from '@material-ui/core/Button';
import PubSub from '../components/PubSub';
import { Tab } from '@material-ui/core';
import Logo from './logo.png';

function Login(props) {
    return (
        <React.Fragment>

        <div><h1>Login</h1></div>
        <form>
        <label>
            User name {'   '}
            <input type="text" name="name" />
        </label>
        </form>
        <form>
        <label>
            Password {'   '}
            <input type="text" name="name" />
        </label>
        </form>
        <Button onClick={PubSub.actionOne} color="primary" >
            Login
        </Button>
        <Button onClick={PubSub.actionOne} color="primary" >
            Sign Up
        </Button>

        </React.Fragment>
        
    );
}

export default Login;
