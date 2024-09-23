"use client";

import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import countries from "../../../public/countries.json";
import parsePhoneNumber, { CountryCode } from "libphonenumber-js";
import TextField from "@mui/material/Select";
import Image from "next/image";
import styles from "./styles.module.css";

const InputStyle = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "10px",
  margin: "10px 0px",
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
    const phoneProxy = parsePhoneNumber(
      String(e.target.value),
      contry?.code,
    )?.number;

    setPhone(String(phoneProxy));
  };

  return (
    <div className={styles.PhoneInputContainer}>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={contry?.value}
        onChange={handlerSetContry}
        sx={InputStyle}
      >
        {contriesOptions.map((codes) => {
          return (
            <MenuItem value={codes.value}>
              <Image
                src={codes.icon}
                alt={codes.label}
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </MenuItem>
          );
        })}
      </Select>
      <TextField
        placeholder={contry?.value}
        type="phone"
        required
        onChange={handlerChangeTextField}
        sx={InputStyle}
      />
    </div>
  );
}

export default PhoneInput;
