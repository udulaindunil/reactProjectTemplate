import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Router , Switch , Route } from 'react-router-dom';
import createBrowserHistroy from 'history/createBrowserHistory'
import Jokes from './components/Jokes';
import Header from './components/Header'
import MusicMaster from './projects/musicmaster';
import EvensOrOdd from'./projects/evens-or-odd';
import Reaction from'./projects/reaction';


ReactDOM.render(
  <Router history={createBrowserHistroy()}>
    <Switch>
      <Route exact={true} path='/' render={() => <Header><App/></Header>} />
      <Route path='/jokes' render={() => <Header><Jokes/></Header>}/>

      <Route path='/music-master' render={() => <Header><MusicMaster/></Header>}/>
      <Route path='/even-or-odds' render={() => <Header><EvensOrOdd/></Header>}/>
      <Route path='/reaction' render={() => <Header><Reaction/></Header>}/>
    </Switch> 
  </Router>,
  document.getElementById('root')
);

 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
