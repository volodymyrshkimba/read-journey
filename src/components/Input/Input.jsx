import { useState } from "react";

import Icon from "../Icon/Icon";

import css from "./Input.module.css";
import clsx from "clsx";

const Input = ({ type, label, placeholder, id, register, error }) => {
  const [visible, setVisible] = useState(false);

  return (
    <label className={clsx(css.label, error && css.error)}>
      <span className={css.labelText}>{label}</span>
      <input
        className={css.input}
        type={type === "password" && visible ? "text" : type}
        placeholder={placeholder}
        {...register(id)}
      />
      {error && <span className={css.errorText}>{error}</span>}
      {type === "password" && (
        <button
          onClick={() => setVisible(!visible)}
          className={css.btn}
          type="button"
        >
          <Icon name={!visible ? "eye-off" : "eye"} w={18} h={18} stroke />
        </button>
      )}
    </label>
  );
};

export default Input;
