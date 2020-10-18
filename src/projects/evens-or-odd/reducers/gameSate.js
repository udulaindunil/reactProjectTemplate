import { SET_GAME_STARTED, SET_GUESS, DECK_DRAW} from '../action/types'

const EVENS = ['2','4','6','0','8'];
const ODDS = ['ACE','3','5','7','8'];



const DEFAULT_GAME_STATE ={guess: '', correctGuesses:0};

const gameStateReducer = (state = DEFAULT_GAME_STATE,action)=>{

    switch(action.type){
        case SET_GUESS :
            return {...state ,guess: action.guess}

        case SET_GAME_STARTED :
            return DEFAULT_GAME_STATE;
        
        case DECK_DRAW.FETCH_SUCCESS:
            const { value } = action.cards[0];
            const { guess , correctGuesses} =state;

            if((guess === 'even' && EVENS.includes(value))||(guess === 'odd' && ODDS.includes(value))){
                  return { ...state , correctGuesses: correctGuesses+1}
            }
            return state;

        default:
            return state;
    }
}

export default gameStateReducer;