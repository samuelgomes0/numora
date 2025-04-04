import z from "zod";

const transactionCreateSchema = z.object({
  description: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(255, {
      message: "Name must be at most 255 characters long",
    }),
  amount: z.number(),
  date: z.date(),
  type: z.string(),
  accountId: z.string(),
});

export default transactionCreateSchema;
