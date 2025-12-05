import { useRef, useState } from "react";
import clsx from "clsx";

import Icon from "../Icon/Icon";

import css from "./Input.module.css";

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
  const inputRef = useRef(null);

  const handleBlur = () => {
    document.body.style.transform = "scale(0.999)";
    document.body.style.transformOrigin = "top left";

    setTimeout(() => {
      document.body.style.transform = "scale(1)";
    }, 50);
  };

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
        ref={inputRef}
        onBlur={handleBlur}
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
