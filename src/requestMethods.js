import axios from "axios";

const BASE_URL = "http://localhost:5050/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// console.log(TOKEN);
// const TOKEN = true
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `${TOKEN}` },
});