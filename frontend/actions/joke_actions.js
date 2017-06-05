export const RECEIVE_JOKES = "RECEIVE_JOKES";
export const RECEIVE_JOKE = "RECEIVE_JOKE";

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
