import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be more than 2 character")
  .max(12, "username must be less than 13 chararcter")
  .regex(
    /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,
    "username not contin special charater"
  );


  export const signUpSchema= z.object({
    username: usernameValidation,
    email:z.string().email({message:"Invalid Email Address"}),
    password:z.string().min(6,"Password must be more than 6 character")

  })