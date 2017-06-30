
export const fetchJokes = () => {
  return fetch('/api/jokes').then(
    (response) => response.json()
  );
};

export const createJoke = (joke) => {

  return fetch('/api/jokes', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({joke})
  }).then(
    response => response.json()
  );

};

export const deleteJoke = (id) => {

  return fetch(`/api/jokes/${id}`, {
    method: "DELETE",
  }).then(
    response => response.json()
  );

};
