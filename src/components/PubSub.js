import messaging from "../Messaging";
import React from 'react';

class PubSub extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            connected : false,
            messages: []
        };
        messaging.register(this.handleMessage.bind(this));
    }

    static initPubSub(){
        console.log("Run at the start to init pub-sub stuff.");
    }

    static subsricribe(){
        console.log("Clicking a button activates this.");

    }

    static send(){
        console.log("Clicking a button activates this.");
    }

    static connect(){
        console.log("Clicking a button activates this.");
    }
}
export default PubSub;