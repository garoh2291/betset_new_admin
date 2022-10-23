import { BACKEND_URL } from "../data";

function get(url) {
  return fetch(url, {
    method: "GET",
  })
    .then((respone) => respone.json())
    .then((data) => {
      return data;
    });
}
export function getGamesRequest(query) {
  return get(`${BACKEND_URL}/game${query ? `?${query}` : ""}`);
}
