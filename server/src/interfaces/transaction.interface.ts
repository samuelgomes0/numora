import { TransactionType } from "@prisma/client";

interface ITransaction {
  id: string;
  description: string | null;
  amount: number;
  date: Date;
  type: TransactionType;
}

interface ITransactionCreate {
  description: string;
  amount: number;
  date: Date;
  type: TransactionType;
  accountId: string;
}

interface ITransactionRepository {
  findAll(): Promise<ITransaction[]>;
  findById(id: string): Promise<ITransaction | null>;
  create(data: ITransactionCreate): Promise<ITransaction>;
}

export { ITransaction, ITransactionCreate, ITransactionRepository };
