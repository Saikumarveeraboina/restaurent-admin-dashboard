import axios from "axios";

const api = axios.create({
  baseURL: "https://restaurent-admin-dashboard.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
