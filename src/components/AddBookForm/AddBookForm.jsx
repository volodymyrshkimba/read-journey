import { useForm } from "react-hook-form";

import Input from "../Input/Input";
import Button from "../Button/Button";

import css from "./AddBookForm.module.css";

const AddBookForm = ({ getFilters, defaultFilters }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);

    // getFilters(formData);
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(onSubmit)}
      // defaultValue={defaultFilters}
    >
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
