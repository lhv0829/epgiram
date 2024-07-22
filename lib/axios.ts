import axios from "axios";
import { accessToken } from "./constants";

export const instance = axios.create({
  baseURL: "https://fe-project-epigram-api.vercel.app/2-1/",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
});
