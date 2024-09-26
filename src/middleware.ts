import { NextRequest, NextResponse } from "next/server";

import { getVerifyCookie } from "./utils";
import { LoginSecondStepResponseSchema } from "./models/common/Login";
import { custom_api } from "./utils/axios";
import { deleteCookie } from "cookies-next";
import { UserSchema } from "./models/User";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();

  const authCookie = getVerifyCookie("auth", LoginSecondStepResponseSchema, {
    req: request,
    res: response,
  });

  if (!authCookie) {
    return response;
  }

  await custom_api
    .get(`/users/${authCookie.user.id}`)
    .then((res) => {
      // eslint-disable-next-line no-console
      const user = UserSchema.parse(res.data);

      response.cookies.set("auth", JSON.stringify({ ...authCookie, user }));
    })
    .catch((err) => {
      deleteCookie("auth", { req: request, res: response });
      // eslint-disable-next-line no-console
      console.error(err);
    });

  return response;
}
