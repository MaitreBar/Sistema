import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "localhost:8080";
export default api;
