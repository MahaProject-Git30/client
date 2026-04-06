import axios from "axios";

const API = axios.create({
  baseURL: "https://server-pjub.onrender.com/api"
});

export default API;