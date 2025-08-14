import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginSchema } from "../../validation/auth";

import Input from "../Input/Input";
import Button from "../Button/Button";

import css from "./LoginForm.module.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = (data) => console.log(data);

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.intutsWrapper}>
        <Input
          label={"Mail:"}
          placeholder={"Your@email.com"}
          type={"text"}
          id={"email"}
          register={register}
          error={errors.email?.message}
          isSubmitted={isSubmitted}
          isSubmitSuccessful={isSubmitSuccessful}
        />
        <Input
          label={"Password:"}
          placeholder={"Yourpasswordhere"}
          type={"password"}
          id={"password"}
          register={register}
          error={errors.password?.message}
          isSubmitted={isSubmitted}
          isSubmitSuccessful={isSubmitSuccessful}
        />
      </div>
      <div className={css.btnsWrapper}>
        <Button type="submit" size={"login"}>
          Log in
        </Button>
        <Link className={css.link} to={"/register"}>
          Don't have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
