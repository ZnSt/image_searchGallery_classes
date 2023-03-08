const host = 'https://pixabay.com/api/';
const myKey = '25755107-c5ecbaee54c3d5c87c2809c98';

export const fetchRequest = searchUser => {
  return fetch(
    `${host}?q=${searchUser}&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
};
