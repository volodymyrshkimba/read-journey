import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import Input from "../Input/Input";
import Button from "../Button/Button";

import css from "./StartStopReadingFrom.module.css";

const defaultValues = { page: "" };

const StartStopReadingFrom = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={css.formTitle}>Start page:</p>
      <div className={css.inputWrapper}>
        <Input
          label={"Page number:"}
          placeholder={"0"}
          type={"number"}
          id={"page"}
          register={register}
        />
      </div>

      <Button type="submit" size={"addBook"} variant={"transparent"}>
        To start
      </Button>
    </form>
  );
};

export default StartStopReadingFrom;
