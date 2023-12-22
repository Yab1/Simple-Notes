import { object, string } from "yup";

const authSchema = object({
  email: string().email("Invalid email format").required("Email is required"),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(30, "Password must be at most 30 characters"),
});

export default authSchema;
