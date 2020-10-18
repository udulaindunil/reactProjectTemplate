import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './components/App';
import PubSub, {PubSubContext} from './pubsub';
import { newMessage } from './actions/messages'

const store = createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

console.log('store.getState()', store.getState());

store.subscribe(()=>console.log('store.getState()',store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
  message: messageObject=>{
    const {message , channel } = messageObject;
    console.log('Recived message', message, 'channel ' , channel );

    store.dispatch(message);
  }
});


setTimeout(()=>{
  pubsub.publish(newMessage({text:'hello world!', username: 'bob'}));

}, 1000);





export default () => (
  <Provider store={store}>
    <PubSubContext.Provider value={{pubsub}}>
      <App/>
    </PubSubContext.Provider>
  </Provider>
  );