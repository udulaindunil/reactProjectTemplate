import React from 'react';
import {connect }  from 'react-redux';
import {fetchDrawCard} from '../action/deck'

const DrawCards = ({ deck_id, fetchDrawCard }) =>{


    return (
        <div>            
        <button onClick={fetchDrawCard(deck_id)}> Drraw the next card!</button>
        </div>
    )
}

const mapDispatchToProps = dispatch=>{
    return {
        fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id))
    }
}

export default connect(
    state=>({deck_id:state.deck.deck_id}),
    mapDispatchToProps
)(DrawCards)