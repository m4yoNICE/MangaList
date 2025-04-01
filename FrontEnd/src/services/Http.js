import axios from "axios";

const baseUrl = "http://localhost:3000/";

const Http = axios.create({
  baseUrl,
  headers: { "Content-Type": "application/json" },
});

export default Http;
