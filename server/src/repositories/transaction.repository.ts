import { prisma } from "../database/prisma-client";
import {
  ITransaction,
  ITransactionRepository,
} from "../interfaces/transaction.interface";

export class TransactionRepository implements ITransactionRepository {
  findAll(): Promise<ITransaction[]> {
    return prisma.transaction.findMany();
  }

  findById(id: string): Promise<ITransaction | null> {
    return prisma.transaction.findUnique({ where: { id } });
  }

  create(transaction: ITransaction): Promise<ITransaction> {
    return prisma.transaction.create({ data: transaction });
  }
}
