import React from 'react';
import { connect } from 'react-redux';



const checkRecord = correctGuesses =>{
    const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_foo123';
    const record = Number(localStorage.getItem(correctGuessesRecordKey));

    if(correctGuesses > record){
        localStorage.setItem(correctGuessesRecordKey, correctGuesses);

        return {record : correctGuesses, isNewRecord: true}
    }

    return {record, isNewRecord: false}
}



const GameState =({remaining,correctGuesses}) =>{

   

    const {record , isNewRecord } = checkRecord(correctGuesses);
    const guessText = correctGuesses === 1 ? 'guess':'guesses'; 
    const recordLable = isNewRecord ? '🎉 New Record' : 'Record';

    console.log(remaining ,correctGuesses );
    return(
        <div>
            <h3>{recordLable} : {record}</h3>
            <p>{remaining} cards remainigs</p>
            <p>{correctGuesses} correct guess {guessText}</p>
            <h3>Record : {record}</h3>
        </div>
    )
}

export default connect(
    ({
        deck:{remaining},
        gameState:{correctGuesses}
    })=>({remaining , correctGuesses})
)(GameState)


