import axios_core from "axios";
import { global } from "../global.js";

export function loginService(loginData) {
  const axios = axios_core.create({
    baseURL: global.SERVER_NAME,
    headers: global.HEADERS,
  });

  return axios
    .post(global.API_LOGIN_USER, { token: loginData.tokenId }, global.HEADERS)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
