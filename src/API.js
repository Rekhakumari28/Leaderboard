// src/API.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://leaderboard-task-ten.vercel.app/api",
});

export default API;
