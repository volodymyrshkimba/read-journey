import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { selectActiveStatus } from "../../redux/reading/selectors";
import { startReading, stopReading } from "../../redux/reading/operations";

import css from "./StartStopReadingFrom.module.css";

const defaultValues = { page: "" };

const StartStopReadingFrom = ({ bookId }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const isActive = useSelector(selectActiveStatus);

  const onSubmit = (formData) => {
    const data = { ...formData, id: bookId };
    dispatch(isActive ? stopReading(data) : startReading(data));
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={css.formTitle}>{isActive ? "Stop page:" : "Start page:"}</p>
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
        {isActive ? "To stop" : "To start"}
      </Button>
    </form>
  );
};

export default StartStopReadingFrom;
