"use client";

import React, { useState } from "react";
import { TextField } from "@mui/material";
import { BsTicketPerforated } from "react-icons/bs";
import styles from "./styles.module.css";
import SubmitButton from "../SubmitButton/Index";
import { LoginFirstStep, LoginSecondStep } from "src/actions/LoginSteps";
import ErrorBoundary from "../ErrorBoundary";

const InputStyle = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "10px",
  margin: "10px 0px",
  width: "100%",
};

interface Props {
  onLogin?: () => void;
}

function LoginSection({ onLogin }: Props): React.JSX.Element {
  const [step, setStep] = useState(1);

  const [token, setToken] = useState<string>();

  const [code, setCode] = useState<string>();

  const handlerLoginFirstStepAction = async (
    formData: FormData,
  ): Promise<void> => {
    formData.append("with2FA", "true");

    const data = await LoginFirstStep(formData);

    setToken(data.token);

    setStep(2);
  };

  const handlerLoginSecondStepAction = async (
    formData: FormData,
  ): Promise<void> => {
    if (!token || !code) {
      return;
    }

    formData.append("token", token);

    formData.append("code", code);

    await LoginSecondStep(formData);

    if (!onLogin) {
      return;
    }

    onLogin();
  };

  return (
    <ErrorBoundary>
      <div className={styles.LoginFormContainer}>
        {step === 1 ? (
          <form
            action={handlerLoginFirstStepAction}
            className={styles.LoginStepContainer}
          >
            <TextField
              required
              id="outlined-required"
              placeholder="Email"
              name="email"
              sx={InputStyle}
            />
            <TextField
              id="outlined-password-input"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              sx={InputStyle}
            />
            <SubmitButton
              fullWidth
              color="#F0B90B"
              textColor="white"
              label="Continue"
              endIcon={<BsTicketPerforated className={styles.ButtonIcon} />}
            />
          </form>
        ) : null}
        {step === 2 && token ? (
          <form
            className={styles.LoginStepContainer}
            action={handlerLoginSecondStepAction}
          >
            <TextField
              placeholder="Code"
              sx={InputStyle}
              type="text"
              required
              error={(code?.length ?? 0) > 6 || (code?.length ?? 0) <= 0}
              onChange={(e) => setCode(e.target.value)}
            />
            <SubmitButton
              fullWidth
              color="#F0B90B"
              textColor="white"
              label="Login"
              endIcon={<BsTicketPerforated className={styles.ButtonIcon} />}
            />
          </form>
        ) : null}
      </div>
    </ErrorBoundary>
  );
}

export default LoginSection;
