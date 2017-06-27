export const fetchJokes = () => {
  fetch('/api/jokes').then(
    (blob) => console.log(blob)
  );
};
