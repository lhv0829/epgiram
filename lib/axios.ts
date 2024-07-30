"use client";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://fe-project-epigram-api.vercel.app/2-1/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(async (config) => {
  try {
    const { data } = await axios.get("/api/auth/session");
    if (data?.accessToken) {
      config.headers["Authorization"] = `Bearer ${data.accessToken}`;
    }
  } catch (error) {
    console.error("Failed to get session:", error);
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data: sessionData } = await axios.get("/api/auth/session");
        console.log(sessionData);
        const { data } = await axios.post("auth/refresh-token", {
          refreshToken: sessionData.refreshToken,
        });
        if (data?.accessToken) {
          originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
          return instance(originalRequest);
        }
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
      }
    }
    return Promise.reject(error);
  }
);
