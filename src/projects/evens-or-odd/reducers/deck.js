import { DECK, DECK_DRAW }  from '../action/types';
import fetchState from './fetchState';  


const DEFAULT_DECK ={
    deck_id: '',
    remaining: 0,
    fetchState:'',
    message: '',
    cards:[]
}


const deckReducer = (state=DEFAULT_DECK , action)=>{

    let remaining,deck_id,cards, message;

    switch(action.type){
        case DECK.FETCH_SUCCESS : 
            ({remaining, deck_id } = action);
            return { ...state, remaining, deck_id ,fetchState: fetchState.success}
        
        case DECK.FETCH_ERROR : 
            ({message } = action.message)
            return { ...state, message, fetchState: fetchState.error}

        case DECK_DRAW.FETCH_SUCCESS: 
             ({remaining, cards } = action)
            return { ...state, remaining, cards ,fetchState: fetchState.success}
        
        case DECK_DRAW.FETCH_ERROR : 
            ({message } = action.message)
            return { ...state, message, fetchState: fetchState.error}
        
        default:
            return state;
      }
  }

  export default deckReducer;