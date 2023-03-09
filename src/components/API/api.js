const host = 'https://pixabay.com/api/';
const myKey = '25755107-c5ecbaee54c3d5c87c2809c98';

export const fetchRequest = (searchUser, page) => {
  return fetch(
    `${host}?q=${searchUser}&page=${page}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=20`
  ).then(response => response.json());
};
