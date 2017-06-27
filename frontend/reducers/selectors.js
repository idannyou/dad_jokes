export const allJokes = (state) => {
  return Object.keys(state.jokes).map((id) => state.jokes[id]);
};
