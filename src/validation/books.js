import * as Yup from "yup";

export const AddBookSchema = Yup.object({
  title: Yup.string().required("Enter the book title"),

  author: Yup.string().required("Enter the author of the book"),

  totalPages: Yup.number()
    .typeError("Enter the number of pages in the book")
    .required("Enter the number of pages in the book")
    .min(1, "The number of pages must be greater than 0"),
});

export const StartReadingSchema = Yup.object({
  page: Yup.number()
    .typeError("Enter the page you started reading from")
    .required("Enter the page you started reading from")
    .min(1, "The page number must be greater than 0"),
});

export const StopReadingSchema = Yup.object({
  page: Yup.number()
    .typeError("Enter the page where you finish reading")
    .required("Enter the page where you finish reading")
    .min(1, "The page number must be greater than 0"),
});
