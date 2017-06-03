import {
        RECEIVE_JOKES,
        RECEIVE_JOKE
      } from '../actions/joke_action';

import {merge} from 'lodash';

const jokesReducer = (state = {}, action) => {

  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_JOKES:
      return {
        jokes: action.jokes
      };
    case RECEIVE_JOKE:
      newState.jokes[action.joke.id] = action.joke;
      return newState;
    default:
      return state;
  }
  
};

export default jokesReducer;
