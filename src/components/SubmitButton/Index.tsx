"use client";
import React, { CSSProperties, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { useFormStatus } from "react-dom";

interface PropsComponent {
  color?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  textColor?: string;
  onChangeLoading?: () => void;
  onClick?: () => void;
}

function SubmitButton({
  color,
  isDisabled,
  label,
  onChangeLoading,
  endIcon,
  startIcon,
  className,
  onClick,
  isLoading,
  style,
  fullWidth,
  textColor,
}: PropsComponent): React.JSX.Element {
  const { pending, method } = useFormStatus();

  // this is when the finish of do the data fetching

  // (detect finishing of the data fetching or server action)

  const methodRef = useRef(method);

  useEffect(() => {
    // this is avoid the execute the onChangeLoading in the first render
    if (!onChangeLoading) {
      return;
    }

    if (pending) {
      methodRef.current = method;
      return;
    }

    if (!pending && methodRef.current !== null) {
      onChangeLoading();
    }
  }, [onChangeLoading, pending, methodRef, method]);

  return (
    <Button
      type="submit"
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{ backgroundColor: color, textTransform: "none", color: textColor }}
      style={{ ...style }}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {label}
      {pending || isLoading ? <CircularProgress /> : null}
    </Button>
  );
}

export default SubmitButton;
