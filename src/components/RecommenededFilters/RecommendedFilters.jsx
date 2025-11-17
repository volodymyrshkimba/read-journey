import { useForm } from "react-hook-form";
import Input from "../Input/Input";

import css from "./RecommendedFilters.module.css";
import Button from "../Button/Button";

const RecommendedFilters = ({ getFilters, defaultFilters }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    getFilters(formData);
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(onSubmit)}
      defaultValue={defaultFilters}
    >
      <p className={css.formTitle}>Filters:</p>
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
      </div>
      <Button type="submit" size={"toApply"} variant={"transparent"}>
        To apply
      </Button>
    </form>
  );
};

export default RecommendedFilters;
