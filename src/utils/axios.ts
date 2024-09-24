import axios from "axios";
import { env } from "@/config";

export const tmdb_api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

tmdb_api.interceptors.request.use((req) => {
  req.headers.setAccept("application/json");
  req.headers.setAuthorization(`Bearer ${env.MOVIES_API_KEY}`);
  return req;
});

export const custom_api = axios.create({
  baseURL: env.CUSTOM_API_URL,
});
