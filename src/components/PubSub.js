import messaging from "../Messaging";
import Paho from "paho-mqtt";

class PubSub{

    register(){
        this.state = {
            connected : false,
            messages: []
		};
		
	   messaging.register(this.handleMessage.bind(this));
	   
	   this.connect();
    }

    submit(){
        let message = new Paho.Message(JSON.stringify({text: "Hello"}));
		message.destinationName = "exampletopic";
		messaging.send(message); 
		
		let message2 = new Paho.Message(JSON.stringify({text: "World"}));
		message2.destinationName = "exampletopic";
        messaging.send(message2); 
    }
    
    connect(){
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
				console.log("Subscribed to a topic.");

			}).catch(error => {
				console.log("Unable to establish connection with Solace Cloud, see above logs for more details.", error);
			});
        } 
    }

    handleMessage(message){
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