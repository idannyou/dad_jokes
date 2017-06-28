
export const fetchJokes = () => {
  return fetch('/api/jokes').then(
    (response) => response.json()
  );
};
