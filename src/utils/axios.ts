import axios from "axios";
import { env } from "@/config";
import { getVerifyCookie } from ".";
import { LoginSecondStepResponseSchema } from "@/models/common/Login";

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

// custom_api.interceptors.request.use((req) => {
//   req.headers.setAccept("application/json");

//   return req;
// });

custom_api.interceptors.request.use(async (req) => {
  req.headers.setAccept("application/json");

  if (typeof window !== "undefined") {
    return req;
  }

  const { cookies } = await import("next/headers");

  const getAuthCookie = getVerifyCookie("auth", LoginSecondStepResponseSchema, {
    cookies,
  });

  if (!getAuthCookie) {
    return req;
  }

  const { authToken } = getAuthCookie;

  req.headers.set("authorization", `Bearer ${authToken}`);

  return req;
});
