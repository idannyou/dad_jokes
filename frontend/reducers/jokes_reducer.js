import RECEIVE_JOKES from '../actions/joke_action';
import RECEIVE_JOKE from '../actions/joke_action';

const jokesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_JOKES:
      return {};
    case RECEIVE_JOKE:
      return {};
    default:
      return state;
  }
};

export default jokesReducer;
