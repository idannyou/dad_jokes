export const allJokes = (state) => (
  Object.keys(state.jokes).map((id) => state.jokes[id])
);
