import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandInstructions,collapseInstrctuon } from '../action/settings'

class Instruction extends Component{

    
    render(){
        const {instructionsExpanded, collapseInstrctuon ,expandInstructions} = this.props;
        return(
            <div>
                {
                instructionsExpanded ? (
                    <div>
                        <h3>Instruction here</h3>
                        <p>Welcome to even or odds . the game goes like tghis</p>
                        <p>The deck is shuffled , then choose : will the next card be even or odd</p>
                        <p>Make a choise on veery draw , and see how many you got right!</p>
                        
                            <button onClick={collapseInstrctuon}>Show less</button>
                        
                    </div>
                    ):(
                    <div>
                        <h3>Instruction here</h3>
                        <p>Welcome to even or odds . the game goes like this......</p>
                        
                            <button onClick={expandInstructions}>More Instruction</button>
                    </div>
                    ) 
                }

            </div>
        )
    }
}


 

export default connect(
    
                    state =>({instructionsExpanded: state.settings.instructionsExpanded}),

                    dispatch =>({   expandInstructions: () => dispatch(expandInstructions()),
                                    collapseInstrctuon: () => dispatch(collapseInstrctuon())
                                })
                                
                    )(Instruction);   