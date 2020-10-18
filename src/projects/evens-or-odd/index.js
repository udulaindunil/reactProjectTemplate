import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';


const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log('store',store);
// console.log('store.getState()' , store.getState())

// store.subscribe(()=>{
//   console.log('Store.getState()', store.getState());
// })


// store.dispatch(startGame());
// store.dispatch(expandInstructions());
// store.dispatch(cancelGame());
// store.dispatch(cancelInstructions());




const EvensOrOdd = () =>{
  return (
    <Provider store={store} >
        <App/>
    </Provider>
  )
}

export default EvensOrOdd;


 

