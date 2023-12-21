import { object, string } from "yup";

const noteSchema = object({
  title: string()
    .required("Title is required")
    .min(4, "Title must be at least 4 characters")
    .max(60, "Title must be at most 60 characters"),
  detail: string()
    .required("Detail is required")
    .min(6, "Detail must be at least 4 characters")
    .max(2000, "Detail must be at most 2000 characters"),
  tag: string().required("Tag is required"),
});

export default noteSchema;
