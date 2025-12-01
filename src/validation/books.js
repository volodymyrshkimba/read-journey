import * as Yup from "yup";

export const AddBookSchema = Yup.object({
  title: Yup.string().required("Введіть назву книги"),

  author: Yup.string().required("Введіть автора книги"),

  totalPages: Yup.number()
    .typeError("Введіть кількість сторінок книги")
    .required("Введіть кількість сторінок книги")
    .min(1, "Кількість сторінок має бути більшою за 0"),
});

export const StartReadingSchema = Yup.object({
  page: Yup.number()
    .typeError("Введіть сторіноку з якої почали читати")
    .required("Введіть сторіноку з якої почали читати")
    .min(1, "Сторінка має бути більшою за 0"),
});

export const StopReadingSchema = Yup.object({
  page: Yup.number()
    .typeError("Введіть сторіноку на якій призупинили читання")
    .required("Введіть сторіноку на якій призупинили читання")
    .min(1, "Сторінка має бути більшою за 0"),
});
