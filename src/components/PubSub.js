import messaging from "../Messaging";
import React from 'react';
import Paho from "paho-mqtt";

class PubSub extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            connected : false,
            messages: []
        };
       messaging.register(PubSub.handleMessage.bind(this));
    }

    static initPubSub(){
        console.log("Run at the start to init pub-sub stuff.");
    }

    static submit(){
        let message = new Paho.Message(JSON.stringify({text: "Hello"}));
		message.destinationName = "exampletopic";
        messaging.send(message);    
    }
    
    static connect(){
        if (this.state.connected) {
			messaging.disconnect();
			this.state={
				connected: false,
				messages: this.state.messages
			};
		} else {
			messaging.connectWithPromise().then(response => {
				console.log("Succesfully connected to Solace Cloud.", response);
				messaging.subscribe("exampletopic");
				this.state={
					connected: true,
					messages: this.state.messages
				};
			}).catch(error => {
				console.log("Unable to establish connection with Solace Cloud, see above logs for more details.", error);
			});
        } 
    }

    static handleMessage(message){
        this.setState(state => {
			const messages = state.messages.concat(message.payloadString);
			return {
				messages,
				connected: state.connected,
			};
		  });
    }
}
export default PubSub;