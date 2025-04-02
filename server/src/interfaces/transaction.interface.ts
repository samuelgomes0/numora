interface ITransaction {
  id: string;
  description: string | null;
  amount: number;
  date: Date;
  type: ETransactionType;
}

enum ETransactionType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

interface ITransactionCreate {
  description: string;
  amount: number;
  date: Date;
  type: ETransactionType;
}

interface ITransactionRepository {
  findAll(): Promise<ITransaction[]>;
  findById(id: string): Promise<ITransaction | null>;
  create(transaction: ITransactionCreate): Promise<ITransaction>;
}

export {
  ETransactionType,
  ITransaction,
  ITransactionCreate,
  ITransactionRepository,
};
