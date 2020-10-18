import React, { Component } from 'react';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import SetUsername from './SetUsername';

class App extends Component{
    
    
    render(){
        return(

            <div>
                <h2>
                Reaction
                </h2>
                <hr/>
                <div>
                    <SetUsername/>
                    <br/>
                    <hr/>
                </div>
                <div>
                    <PublishMessage/>
                </div>
                <div>
                    <MessageBoard/>
                </div>

            </div>
        );
    }
}

export default App;
