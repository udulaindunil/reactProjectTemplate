import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame,cancelGame } from '../action/settings'
import { fetchNewDeck} from '../action/deck';
import Instruction from './Instruction';
import fetchStates from '../reducers/fetchState';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

class App extends Component{

    startGame = () =>{

        this.props.startGame();

        // fetch('https://cors-anywhere.herokuapp.com/https://deckofcardsapi.com/api/deck/new/shuffle').then(
            // https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle
        this.props.fetchNewDeck();
        
    }
    
    
    render(){

        if(this.props.fetchState === fetchStates.error){
            return (
                <div>
                    <p>Please try reloading the app again</p>
                </div>
            )
        }

        console.log('this',this)
        return(

            <div>
                <h2> ♠️ Evens or Odds ♠️ </h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>Game is On</h3>
                            <br/>

                            <DrawCard/>
                            <hr/>
                            <GameState/>
                            <hr/>
                            <Guess/>
                            <hr/>
                            <Card/>
                            <hr/>
                            
                            <button onClick={this.props.cancelGame}>Cancel Game</button>
                        </div>
                    ):(
                        <div>
                            <h3>Game is not started</h3>
                            <br/>
                            <button onClick={this.startGame}>Start Game</button>
                        </div>
                    )
                }

                <br/>
                <br/>

                <Instruction/>

            </div>
        );
    }
}

const mapStateToProps = state =>{
    console.log('state',state);
    // const {gameStarted , fetchState , message } = state.settings;
    // const {fetchState , message } = state.deck ;

    const {settings: {gameStarted} , deck: {fetchState, message}} = state;
    

    return { gameStarted, fetchState, message}; 
}

// const mapDispatchToProps = dispatch =>{
//     return {
//         startGame: () => dispatch(startGame()),
//         cancelGame: () => dispatch(cancelGame()),
//         fetchNewDeck: () => fetchNewDeck(dispatch)
//     };
// }


const componentConnector = connect(mapStateToProps,
    {
        startGame,cancelGame, fetchNewDeck
    });

export default componentConnector(App);
