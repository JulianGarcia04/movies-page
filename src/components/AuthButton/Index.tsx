import React from "react";
import { getVerifyCookie } from "@/utils";
import { LoginSecondStepResponseSchema } from "@/models/common/Login";
import LoginButton from "../LoginButton/Index";
import { FaUserCheck } from "react-icons/fa";
import { cookies } from "next/headers";

function AuthButton(): React.JSX.Element {
  const authCookie = getVerifyCookie("auth", LoginSecondStepResponseSchema, {
    cookies,
  });

  if (!authCookie) {
    return <LoginButton />;
  }

  return <FaUserCheck color="#AD5F00" size="26px" />;
}

export default AuthButton;
