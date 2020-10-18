import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newMessage } from '../actions/messages';
import { PubSubContext } from '../pubsub';





class PublishMessage extends Component{
    state = { text: ''};
    
    updateText = event => this.setState({text: event.target.value });
    publishMessage = ()=>{
        const { username } = this.props;
        const { text } = this.state;
            this.context.pubsub.publish(newMessage({text, username}));
    }

    handleKeyPress = (event) =>{
        if(event.key === 'Enter') {
            this.publishMessage();
        }
    }

    render(){

        console.log('this', this);
        return(

            <div>
                    <h3>Got Something to Say? </h3>
                    <input onChange={this.updateText} onKeyPress={this.handleKeyPress}></input>
                    {''}
                    <button onClick={this.publishMessage} >Publish it !</button>            
            </div>
        )
    }

    static contextType = PubSubContext;
}

export default connect(({username})=>({username}))(PublishMessage);