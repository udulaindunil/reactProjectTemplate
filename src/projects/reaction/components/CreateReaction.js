import React ,{ Component } from 'react';
import {REACTION_OBJECTS} from '../actions/types';
import { createReaction } from '../actions/reactions';
import { PubSubContext } from '../pubsub';
import { connect } from 'react-redux';

class CreateReaction extends Component{

    publishReaction = ({type , emoji })=>()=>{
        const messageId = this.props.messageId;
        const {username} = this.props;
        this.context.pubsub.publish(createReaction({type, emoji , username,messageId}))
    }

    render(){

        return (
            <div>
                {
                    REACTION_OBJECTS.map(REACTION_OBJECT=>{
                        const {type , emoji } = REACTION_OBJECT;

                    return <span 
                                style={{margin: 5, cursor: 'pointer'}} 
                                key={type}
                                onClick={this.publishReaction({type, emoji})}
                                >{emoji}</span>
                    })
                }

            </div>
        )
    }
    static contextType = PubSubContext;
}

export default connect(({username})=>({username}))(CreateReaction);