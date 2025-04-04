import z from "zod";

const accountCreateSchema = z.object({
  userId: z.string().uuid(),
  name: z.string().min(3, {
    message: "Account name must be at least 3 characters long",
  }),
});

export default accountCreateSchema;
