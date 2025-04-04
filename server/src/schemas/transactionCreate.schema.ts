import z from "zod";

const transactionCreateSchema = z.object({
  description: z.string(),
  amount: z.number(),
  date: z.string().date(),
  transactionType: z.enum(["INCOME", "EXPENSE"]),
  accountId: z.string().uuid(),
});

export default transactionCreateSchema;
