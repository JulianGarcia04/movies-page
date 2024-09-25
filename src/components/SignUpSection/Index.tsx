import Button from "@mui/material/Button";
import React, { useRef, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import styles from "./styles.module.css";
import { TextField } from "@mui/material";
import { VscDebugContinue } from "react-icons/vsc";
import PhoneInput from "../PhoneInput/Index";
import SubmitButton from "../SubmitButton/Index";
import { action } from "@/actions/SignUpAction";
import ErrorBoundary from "../ErrorBoundary";

const InputStyle = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "10px",
  margin: "10px 0px",
  width: "100%",
};

interface Props {
  onSignUp?: () => void;
}

function SignUpSection({ onSignUp }: Props): React.JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);

  const [step, setStep] = useState(1);

  const [userFormData, _] = useState(new FormData());

  const handlerAction = async (): Promise<void> => {
    await action(userFormData);

    if (!onSignUp) {
      return;
    }

    onSignUp();
  };

  const handlerOnChangeTextField = (key: string, val: string): void => {
    userFormData.append(key, val);
  };

  return (
    <ErrorBoundary>
      <form
        ref={formRef}
        className={styles.SignUpContainer}
        action={handlerAction}
      >
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
              onChange={(e) =>
                handlerOnChangeTextField("email", e.target.value)
              }
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
              name="name"
              id="outlined-required"
              placeholder="Nombre"
              onChange={(e) => handlerOnChangeTextField("name", e.target.value)}
              sx={InputStyle}
            />

            <PhoneInput
              onChange={(phone) => handlerOnChangeTextField("phone", phone)}
            />

            <Button
              sx={{
                backgroundColor: "#F0B90B",
                textTransform: "none",
                color: "white",
                width: "100%",
                height: "45px",
              }}
              onClick={() => setStep(4)}
            >
              <span className={styles.ButtonLabel}>Continue</span>
              <VscDebugContinue className={styles.ButtonIcon} />
            </Button>
          </div>
        ) : null}
        {step === 4 ? (
          <div className={styles.SignUpStepContainer}>
            <TextField
              type="password"
              required
              id="outlined-required"
              placeholder="Password"
              onChange={(e) =>
                handlerOnChangeTextField("password", e.target.value)
              }
              sx={InputStyle}
            />

            <SubmitButton
              textColor="white"
              color="#F0B90B"
              style={{
                width: "100%",
                height: "45px",
              }}
              label="Create account"
            />
          </div>
        ) : null}
      </form>
    </ErrorBoundary>
  );
}

export default SignUpSection;
