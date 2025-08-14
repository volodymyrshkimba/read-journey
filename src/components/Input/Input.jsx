import { useState } from "react";

import Icon from "../Icon/Icon";

import css from "./Input.module.css";
import clsx from "clsx";

const Input = ({
  type,
  label,
  placeholder,
  id,
  register,
  error,
  isSubmitted,
  isSubmitSuccessful,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <label
      className={clsx(
        css.label,
        error && css.error,
        isSubmitted && !isSubmitSuccessful && !error && css.correct
      )}
    >
      <span className={css.labelText}>{label}</span>
      <input
        className={css.input}
        type={type === "password" && visible ? "text" : type}
        placeholder={placeholder}
        {...register(id)}
      />
      {(error || (isSubmitted && !error && !isSubmitSuccessful)) && (
        <span
          className={clsx(css.statusIcon, type === "password" && css.pwdIcon)}
        >
          <Icon name={error ? "error" : "check-o"} w={18} h={18} />
        </span>
      )}
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
