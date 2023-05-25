import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "http://localhost:8080";
axios.defaults.headers.put["Access-Control-Allow-Origin"] = "http://localhost:8080";
export default api;
