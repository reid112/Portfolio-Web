import axios from "axios";

export default axios.create({
  baseURL: "https://api.rjreid.ca/api",
  responseType: "json"
});