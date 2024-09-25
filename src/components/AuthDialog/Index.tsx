"use client";

import React, { CSSProperties, useState } from "react";
import styles from "./styles.module.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import LoginSection from "../LoginSection/Index";
import SignUpSection from "../SignUpSection/Index";

const style = {
  position: "relative",
  display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "70%",
  border: "2px solid #000",
  boxShadow: 24,
  zIndex: "1",
};

interface Props {
  open: boolean;
  handlerOpen: (val: boolean) => void;
}

type Steps = "login" | "sign-up";

function AuthDialog({ open, handlerOpen }: Props): React.JSX.Element {
  const [step, setStep] = useState<Steps>("login");

  const getButtonsStyle = (newStep: Steps): CSSProperties => {
    return step === newStep
      ? { backgroundColor: "#F0B90B", textTransform: "none" }
      : { backgroundColor: "#262626", textTransform: "none" };
  };

  return (
    <Modal
      open={open}
      onClose={() => handlerOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            filter: "blur(5px)",
            background: "transparent",
            zIndex: "-1",
          }}
        ></Box>

        <div className={styles.AuthContainer}>
          <div className="full-width">
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                textTransform: "none",
              }}
              startIcon={<IoArrowBackCircleOutline />}
              onClick={() => handlerOpen(false)}
            >
              Back
            </Button>
          </div>
          <div className={styles.AuthContainerStepper}>
            <ButtonGroup
              sx={{ width: "auto" }}
              variant="contained"
              aria-label="Basic button group"
            >
              <Button
                sx={getButtonsStyle("sign-up")}
                onClick={() => setStep("sign-up")}
              >
                Sign up
              </Button>
              <Button
                sx={getButtonsStyle("login")}
                onClick={() => setStep("login")}
              >
                Log In
              </Button>
            </ButtonGroup>
            {step === "sign-up" ? (
              <SignUpSection onSignUp={() => setStep("login")} />
            ) : (
              <LoginSection onLogin={() => handlerOpen(false)} />
            )}
          </div>
        </div>

        <Card sx={{ width: "50%", backgroundColor: "#1C1C1C" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Welcome to Quickbet Movies!</h2>
            <p>
              🎬 Ready to unlock a universe of cinematic delights? Sign up now
              and start your journey with us!
            </p>
            <Image
              src="/02.svg"
              alt="auth_image"
              width={200}
              height={400}
              style={{ width: "auto" }}
            ></Image>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default AuthDialog;
