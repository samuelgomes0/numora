import z from "zod";

const userCreateSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(255, {
      message: "Name must be at most 255 characters long",
    }),
  email: z.string().email({
    message: "Email must be a valid email address",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(255, {
      message: "Password must be at most 255 characters long",
    }),
});

export default userCreateSchema;
