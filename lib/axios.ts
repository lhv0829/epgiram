import axios from "axios";
import { getCookieValue } from "./getCookie";

export const instance = axios.create({
  baseURL: "https://fe-project-epigram-api.vercel.app/2-1/",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${getCookieValue("accessToken")}`,
    "Content-Type": "application/json",
  },
});
