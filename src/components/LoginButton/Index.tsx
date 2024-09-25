"use client";

import React from "react";
import AuthDialog from "../AuthDialog/Index";
import { FaRegUserCircle } from "react-icons/fa";

function LoginButton(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <FaRegUserCircle size="26px" />
      </button>
      <AuthDialog open={open} handlerOpen={setOpen}></AuthDialog>
    </>
  );
}

export default LoginButton;
