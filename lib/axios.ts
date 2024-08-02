import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: "https://fe-project-epigram-api.vercel.app/2-1/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(async (config) => {
  try {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
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
    if (error.response?.status === 401) {
      try {
        const refreshToken = Cookies.get("refreshToken");
        const { data } = await axios.post("auth/refresh-token", {
          refreshToken,
        });
        if (data?.accessToken) {
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;
          const originalResponse = await axios.request(originalRequest);
          return originalResponse.data.data;
        }
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
      }
    }
    return Promise.reject(error);
  }
);
