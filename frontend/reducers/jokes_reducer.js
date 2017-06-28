import {
        RECEIVE_JOKES,
        RECEIVE_JOKE,
        REMOVE_JOKE
      } from '../actions/joke_actions';

import {merge} from 'lodash';

// initialState to test front end
const initialState = {
};

const jokesReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_JOKES:
      return action.jokes;
    case RECEIVE_JOKE:
      newState[action.joke.id] = action.joke;
      return newState;

    case REMOVE_JOKE:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }

};

export default jokesReducer;
