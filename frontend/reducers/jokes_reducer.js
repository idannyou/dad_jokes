import {
        RECEIVE_JOKES,
        RECEIVE_JOKE
      } from '../actions/joke_actions';

import {merge} from 'lodash';

// initialState to test front end
const initialState = {
  1: {
    id: 1,
    joke: "What is XYZ?",
    answer: "ABC",
    funny: false
  },
  2: {
    id: 2,
    joke: "What bee gives milk?",
    answer: "boo bees",
    funny: true
  },
};

const jokesReducer = (state = initialState, action) => {

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
