import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// // testing imports
// import {allJokes} from './reducers/selectors';
// import {
//   receiveJokes,
//   receiveJoke
// } from './actions/joke_actions'

document.addEventListener('DOMContentLoaded', () => {
  // To test store
  const store = configureStore();
  // window.store = store;
  // window.allJokes = allJokes;
  // window.receiveJokes = receiveJokes;
  // window.receiveJoke = receiveJoke;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
