import * as ApiUtil from '../util/api_util';

export const RECEIVE_JOKES = "RECEIVE_JOKES";
export const RECEIVE_JOKE = "RECEIVE_JOKE";
export const REMOVE_JOKE = "REMOVE_JOKE";

export const receiveJokes = (jokes) => {
  return {
    type: RECEIVE_JOKES,
    jokes
  };
};


export const receiveJoke = (joke) => {
  return {
    type: RECEIVE_JOKE,
    joke
  };

};

export const removeJoke = (id) => {
  return {
    type: REMOVE_JOKE,
    id
  };

};

export const fetchJokes = () => (dispatch) => {
  return ApiUtil.fetchJokes().then(
    (jokes) => dispatch(receiveJokes(jokes))
  );
};

export const createJoke = (joke) => dispatch => {
  return ApiUtil.createJoke(joke).then(
    (joke) => dispatch(receiveJoke(joke))
  );
};
