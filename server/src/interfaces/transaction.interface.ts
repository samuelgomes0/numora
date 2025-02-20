interface ITransaction {
  id: string;
  description: string;
  amount: number;
  date: Date;
  type: ETransactionType;
}

enum ETransactionType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export { ETransactionType, ITransaction };
