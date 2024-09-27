"use client";

import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";

function Error(): React.JSX.Element {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(69 69 69)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div>
          <MdOutlineErrorOutline fill="#ff0000" size={"50px"} />
        </div>
        <div>
          <h2>Unknown error</h2>
        </div>
      </div>
    </div>
  );
}

export default Error;
