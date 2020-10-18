import { NEW_MESSAGE }  from '../actions/types';

const DEFAULT_MESSAGE = { items : [] };


const messagesReducer = (state=DEFAULT_MESSAGE , action )=>{
    switch (action.type) {
        case NEW_MESSAGE:

            // console.log("this from thr reduce here is the state", state);
            return{...state, items: [...state.items, action.item]} ; 
    
        default:
            // console.log("This is the default message");
            return state;
    }
}

export default messagesReducer;