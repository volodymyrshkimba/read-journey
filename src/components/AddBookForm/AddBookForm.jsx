import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { addBook } from "../../redux/books/operations";
import { openModal } from "../../redux/modal/slice";

import { AddBookSchema } from "../../validation/books.js";

import css from "./AddBookForm.module.css";

const defaultFilters = { title: "", author: "", totalPages: "" };

const AddBookForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = useForm({
    defaultValues: defaultFilters,
    resolver: yupResolver(AddBookSchema),
  });

  const onSubmit = (formData) => {
    dispatch(addBook(formData))
      .unwrap()
      .then((data) => {
        console.log(data);

        dispatch(
          openModal({
            type: "bookAdded",
          })
        );
      })
      .catch((error) => {
        toast.info(error.message);
      });
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={css.formTitle}>Create your library:</p>
      <div className={css.inputsWrapper}>
        <Input
          label={"Book title:"}
          placeholder={"Enter text"}
          type={"text"}
          id={"title"}
          register={register}
          error={errors.title?.message}
          isSubmitted={isSubmitted}
          isSubmitSuccessful={isSubmitSuccessful}
        />
        <Input
          label={"The author:"}
          placeholder={"Enter text"}
          type={"text"}
          id={"author"}
          register={register}
          error={errors.author?.message}
          isSubmitted={isSubmitted}
          isSubmitSuccessful={isSubmitSuccessful}
        />
        <Input
          label={"Number of pages:"}
          placeholder={"0"}
          type={"number"}
          id={"totalPages"}
          register={register}
          error={errors.totalPages?.message}
          isSubmitted={isSubmitted}
          isSubmitSuccessful={isSubmitSuccessful}
        />
      </div>
      <Button type="submit" size={"addBook"} variant={"transparent"}>
        Add book
      </Button>
    </form>
  );
};

export default AddBookForm;
