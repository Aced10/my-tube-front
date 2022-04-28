import axios_core from "axios";
import { global } from "../global.js";

export function searchVideos(keyword, maxResults = 5, pageKey) {
  const axios = axios_core.create({
    baseURL: global.SERVER_NAME,
    headers: global.HEADERS,
  });

  return axios
    .get(`${global.API_SEARCH_VIDEOS}/${keyword}?maxResults=${maxResults}&&pageKey=${pageKey}`, global.HEADERS)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}