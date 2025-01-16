import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const API = axios.create({
  baseURL,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
});

export default API;