import axios, { AxiosInstance } from "axios";

export const axiosPrivate: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});


