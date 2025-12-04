import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { RegisterSchema } from "../../validation/auth";

import { signup } from "../../redux/auth/operations.js";

import Input from "../Input/Input";
import Button from "../Button/Button";

import css from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const onSubmit = (data) => {
    dispatch(signup(data))
      .unwrap()
      .catch((error) => {
        toast.info(error.message);
      });
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.intutsWrapper}>
        <Input
          label={"Name:"}
          placeholder={"Ilona Ratushniak"}
          type={"text"}
          id={"name"}
          register={register}
        />
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
        <Button type="submit" size={"register"}>
          Registration
        </Button>
        <Link className={css.link} to={"/login"}>
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
