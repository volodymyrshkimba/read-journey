import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { addBook } from "../../redux/books/operations";
import { openModal } from "../../redux/modal/slice";

import css from "./AddBookForm.module.css";

const defaultFilters = { title: "", author: "", totalPages: "" };

const AddBookForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: defaultFilters,
  });

  const onSubmit = (formData) => {
    dispatch(addBook(formData))
      .unwrap()
      .then(() => {
        dispatch(
          openModal({
            type: "bookAdded",
          })
        );
      });
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
        />
        <Input
          label={"The author:"}
          placeholder={"Enter text"}
          type={"text"}
          id={"author"}
          register={register}
        />
        <Input
          label={"Number of pages:"}
          placeholder={"0"}
          type={"number"}
          id={"totalPages"}
          register={register}
        />
      </div>
      <Button type="submit" size={"addBook"} variant={"transparent"}>
        Add book
      </Button>
    </form>
  );
};

export default AddBookForm;
