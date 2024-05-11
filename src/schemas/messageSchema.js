import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(6, { message: "must have more than 6 character" })
    .max(200, { message: "must have  than 200 character" }),
});
