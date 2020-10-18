import { combineReducers } from 'redux';
import settingsReducer from './settings';
import deckReducer from './deck';
import gameStateReducer from './gameSate'

export default combineReducers({
    settings: settingsReducer, 
    deck:deckReducer,
    gameState: gameStateReducer
});

 