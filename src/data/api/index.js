import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3001/api",
  baseURL: "https://api.rjreid.ca/api",
  responseType: "json"
});