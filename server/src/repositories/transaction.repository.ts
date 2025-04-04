import { prisma } from "../database/prisma-client";
import {
  ITransaction,
  ITransactionCreate,
  ITransactionRepository,
} from "../interfaces";

class TransactionRepository implements ITransactionRepository {
  findAll(): Promise<ITransaction[]> {
    return prisma.transaction.findMany();
  }

  findById(id: string): Promise<ITransaction | null> {
    return prisma.transaction.findUnique({ where: { id } });
  }

  create(data: ITransactionCreate): Promise<ITransaction> {
    return prisma.transaction.create({ data: data });
  }
}

export default TransactionRepository;
