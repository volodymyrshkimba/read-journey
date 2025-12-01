import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { selectActiveStatus } from "../../redux/reading/selectors";
import { startReading, stopReading } from "../../redux/reading/operations";
import { openModal } from "../../redux/modal/slice";

import { StartReadingSchema, StopReadingSchema } from "../../validation/books";

import css from "./StartStopReadingFrom.module.css";

const defaultValues = { page: "" };

const StartStopReadingFrom = ({ bookId }) => {
  const dispatch = useDispatch();
  const isActive = useSelector(selectActiveStatus);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(isActive ? StopReadingSchema : StartReadingSchema),
  });

  const onSubmit = (formData) => {
    const data = { ...formData, id: bookId };
    if (isActive) {
      dispatch(stopReading(data))
        .unwrap()
        .then((response) => {
          if (response.status === "done") {
            dispatch(
              openModal({
                type: "bookReaded",
              })
            );
          }
        });
    } else {
      dispatch(startReading(data));
    }
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
          error={errors.page?.message}
          isSubmitted={isSubmitted}
          isSubmitSuccessful={isSubmitSuccessful}
        />
      </div>

      <Button type="submit" size={"addBook"} variant={"transparent"}>
        {isActive ? "To stop" : "To start"}
      </Button>
    </form>
  );
};

export default StartStopReadingFrom;
