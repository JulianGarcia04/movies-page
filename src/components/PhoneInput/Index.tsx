"use client";

import {
  MenuItem,
  Select,
  FormControl,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import countries from "../../../public/countries.json";
import parsePhoneNumber, { CountryCode } from "libphonenumber-js";
import Image from "next/image";
import styles from "./styles.module.css";

const InputStyle = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "10px",
  margin: "10px 0px",
  width: "100%",
};

interface CountryOpt {
  label: string;
  icon: `/country-flags/${string}.png`;
  value: string;
  code: CountryCode;
}

interface Props {
  onChange?: (phone: string) => void;
}

function PhoneInput({ onChange }: Props): React.JSX.Element {
  const [contry, setContry] = useState<CountryOpt>();

  const [rawPhone, setRawPhone] = useState("");

  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!onChange) {
      return;
    }

    onChange(phone);
  }, [phone]);

  const contriesOptions = countries.map((contry): CountryOpt => {
    return {
      label: contry.name,
      icon: `/country-flags/${contry.code.toLocaleLowerCase()}.png`,
      value: contry.prefix,
      code: contry.code as CountryCode,
    };
  });

  const handlerSetContry = (e): void => {
    const prefix = e.target.value;

    const contryProxy = contriesOptions.find((contryOpt) => {
      return contryOpt.value === prefix;
    });

    if (!contryProxy) {
      return;
    }

    setContry(contryProxy);
  };

  const handlerChangeTextField = (e): void => {
    if (Number.isNaN(Number(e.target.value))) {
      return;
    }

    setRawPhone(String(e.target.value));

    const phoneProxy = parsePhoneNumber(
      String(e.target.value),
      contry?.code,
    )?.number;

    setPhone(String(phoneProxy));
  };

  return (
    <div className={styles.PhoneInputContainer}>
      <FormControl size={contry ? "small" : "medium"}>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          onChange={handlerSetContry}
          sx={InputStyle}
        >
          {contriesOptions.map((codes) => {
            return (
              <MenuItem
                value={codes.value}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  src={codes.icon}
                  alt={codes.label}
                  width={30}
                  height={30}
                />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <TextField
        required
        value={rawPhone}
        onChange={handlerChangeTextField}
        error={!parsePhoneNumber(String(rawPhone), contry?.code)?.isValid()}
        sx={InputStyle}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">{contry?.value}</InputAdornment>
            ),
          },
        }}
      />
    </div>
  );
}

export default PhoneInput;
