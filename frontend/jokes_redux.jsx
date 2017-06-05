import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {allJokes} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  // To test store
  const store = configureStore();
  window.store = store;
  window.allJokes = allJokes;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Testing</h1>, root);
});
