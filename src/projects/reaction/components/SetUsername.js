import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setUsername  } from '../actions/username';

const SetUsername = ({setUsername}) =>{
    return (
        <div>
            <h3>username</h3>
            <input onChange={event => setUsername(event.target.value)} />
        </div>
    )
}

export default connect(null,{setUsername})(SetUsername);