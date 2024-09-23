import Button from "@mui/material/Button";
import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import styles from "./styles.module.css";
import { TextField } from "@mui/material";
import { VscDebugContinue } from "react-icons/vsc";
import PhoneInput from "../PhoneInput/Index";

const InputStyle = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "10px",
  margin: "10px 0px",
};

function SignUpSection(): React.JSX.Element {
  const [step, setStep] = useState(1);

  return (
    <div className={styles.SignUpContainer}>
      {step === 1 ? (
        <Button
          sx={{
            backgroundColor: "#F0B90B",
            textTransform: "none",
            color: "white",
            width: "100%",
            height: "45px",
          }}
          onClick={() => setStep(2)}
        >
          <span className={styles.ButtonLabel}>Register with your Email</span>
          <MdOutlineMailOutline className={styles.ButtonIcon} />
        </Button>
      ) : null}
      {step === 2 ? (
        <div className={styles.SignUpStepContainer}>
          <TextField
            type="email"
            required
            id="outlined-required"
            placeholder="Email"
            sx={InputStyle}
          />
          <Button
            sx={{
              backgroundColor: "#F0B90B",
              textTransform: "none",
              color: "white",
              width: "100%",
              height: "45px",
            }}
            onClick={() => setStep(3)}
          >
            <span className={styles.ButtonLabel}>Continue</span>
            <VscDebugContinue className={styles.ButtonIcon} />
          </Button>
        </div>
      ) : null}
      {step === 3 ? (
        <div className={styles.SignUpStepContainer}>
          <TextField
            type="text"
            required
            id="outlined-required"
            placeholder="Nombre"
            sx={InputStyle}
          />

          <PhoneInput />

          <Button
            sx={{
              backgroundColor: "#F0B90B",
              textTransform: "none",
              color: "white",
              width: "100%",
              height: "45px",
            }}
            onClick={() => setStep(3)}
          >
            <span className={styles.ButtonLabel}>Continue</span>
            <VscDebugContinue className={styles.ButtonIcon} />
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default SignUpSection;
