export const allJokes = (state) => {
  debugger
  return Object.keys(state.jokes).map((id) => state.jokes[id]);
};
