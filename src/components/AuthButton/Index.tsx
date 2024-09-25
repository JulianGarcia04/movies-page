import React from "react";
import { cookies } from "next/headers";
import { LoginSecondStepResponseSchema } from "@/models/common/Login";
import LoginButton from "../LoginButton/Index";
import { FaUserCheck } from "react-icons/fa";

function AuthButton(): React.JSX.Element {
  try {
    const cookieStore = cookies();

    const getCookie = cookieStore.get("auth");

    const rawAuthDataString = getCookie?.value;

    if (!rawAuthDataString) {
      return <LoginButton />;
    }

    const rawAuthData = JSON.parse(rawAuthDataString);

    const parseToAuthData =
      LoginSecondStepResponseSchema.safeParse(rawAuthData);

    if (!parseToAuthData.success) {
      // eslint-disable-next-line no-console
      console.log(parseToAuthData.error);

      return <LoginButton />;
    }

    return <FaUserCheck color="#AD5F00" size="26px" />;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return <LoginButton />;
  }
}

export default AuthButton;
