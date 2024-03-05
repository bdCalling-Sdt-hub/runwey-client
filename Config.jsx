import axios from "axios";
const token = localStorage.getItem("token");

const baseAxios = axios.create({
  baseURL: "https://runweymailer.com/",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar", Authorization: `Bearer ${token}` },
});

export default baseAxios;
