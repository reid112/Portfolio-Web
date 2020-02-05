import axios from "axios";

export default axios.create({
  baseURL: "https://api.rjeid.ca/api",
  responseType: "json"
});