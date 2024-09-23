import React from "react";
import { TextField, Button } from "@mui/material";
import { BsTicketPerforated } from "react-icons/bs";
import styles from "./styles.module.css";

const InputStyle = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "10px",
  margin: "10px 0px",
};

function LoginSection(): React.JSX.Element {
  return (
    <form className={styles.LoginFormContainer}>
      <TextField
        required
        id="outlined-required"
        placeholder="Email"
        sx={InputStyle}
      />
      <TextField
        id="outlined-password-input"
        placeholder="Password"
        type="password"
        autoComplete="current-password"
        sx={InputStyle}
      />
      <Button
        sx={{
          backgroundColor: "#F0B90B",
          textTransform: "none",
          color: "white",
          width: "100%",
        }}
      >
        <span className={styles.ButtonLabel}>Continue</span>
        <BsTicketPerforated className={styles.ButtonIcon} />
      </Button>
    </form>
  );
}

export default LoginSection;
