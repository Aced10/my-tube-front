export const global = {
	SERVER_NAME: process.env.REACT_APP_HTTP_SERVER,
	HEADERS: {
		"Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
	},
	PRIVATE_HEADERS: {
		Authorization: "Bearer " + localStorage.getItem("loginData"),
		"Content-Type": "application/json",
	},

  API_LOGIN_USER: process.env.REACT_APP_HTTP_SERVER + "/api/users/google-login",
  API_SEARCH_VIDEOS: process.env.REACT_APP_HTTP_SERVER + "/api/videos/search",
}