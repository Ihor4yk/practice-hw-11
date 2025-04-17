// import axios from 'axios';

export function getImagesByQuery(query) {
  const BAS_URL = "https://pixabay.com/api/";
  const params = new URLSearchParams({
    key: "43196488-b1a28e2a6e2ea3f6c7718f6c5",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
  });

  const url = `${BAS_URL}?${params}`

  return fetch(url).then((res) => res.json());
}