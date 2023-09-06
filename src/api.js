import axios from "axios";

const api = axios.create({
  baseURL: "http://52.73.201.125:8080",
});
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "http://52.73.201.125:8080";
axios.defaults.headers.put["Access-Control-Allow-Origin"] = "http://52.73.201.125:8080";
export default api;