import axios from "axios";
const token = localStorage.getItem("token");

const baseAxios = axios.create({
  baseURL: "http://103.145.138.77:3002",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar", Authorization: `Bearer ${token}` },
});

export default baseAxios;
