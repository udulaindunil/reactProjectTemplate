import React from 'react';
import {connect } from 'react-redux';
import {setGuessEven,setGuessOdd } from '../action/guess';

const Guess = ({guess,setGuessEven,setGuessOdd}) =>{

    console.log(guess);
    return(
        <div>
            <h3>
                Will it be even or odd?
            </h3> 
            <div> 
                <button onClick={setGuessEven}  style={guess==='even'? {border:'5px solid #43a047'}:null} >Even</button>
                <button onClick={setGuessOdd} style={guess==='odd'? {border:'5px solid #43a047'}:null} >Odd</button>
            </div>
        </div>

    )

}

export default connect(
    ({gameState: {guess}})=>({guess}),
    { setGuessEven, setGuessOdd }
)(Guess);