export const RECEIVE_JOKES = "RECEIVE_JOKES";
export const RECEIVE_JOKE = "RECEIVE_JOKE";
export const REMOVE_JOKE = "REMOVE_JOKE";

export const receiveJokes = (jokes) => (
  {
    type: RECEIVE_JOKES,
    jokes
  }
);

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
