"use client";

import React from "react";
import styles from "./styles.module.css";

interface Props {
  id?: string;
  label?: string;
  placeholder?: string;
  name: string;
  value?: (number | string) | string[];
  defaultValue?: (number | string) | string[];
  multiple?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  options: { label: string; value: string | number }[];
}

function Select({
  label,
  id,
  name,
  value,
  defaultValue,
  multiple,
  onChange,
  options,
  placeholder,
}: Props): React.JSX.Element {
  return (
    <label htmlFor={id} className={styles.selectBox}>
      <span className={styles.title}>{label}</span>
      <select
        name={name}
        className={styles.genresSelect}
        multiple={multiple}
        defaultValue={defaultValue}
        value={value}
        id={id}
        onChange={onChange}
        required
      >
        <option label={placeholder} value="" selected disabled hidden />
        {options.map((opt, idx) => {
          return <option label={opt.label} value={opt.value} key={idx} />;
        })}
      </select>
    </label>
  );
}

export default Select;
