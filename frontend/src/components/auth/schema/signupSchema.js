import { object, string } from "yup";

const authSchema = object({
  username: string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .max(15, "Username must be at most 15 characters"),
  email: string().email("Invalid email format").required("Email is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password must be at most 30 characters"),
});

export default authSchema;
