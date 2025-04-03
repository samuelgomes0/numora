import { ITransaction, ITransactionCreate } from "../interfaces";
import { TransactionRepository } from "../repositories";

class TransactionUseCase implements TransactionRepository {
  private readonly transactionRepository: TransactionRepository;

  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  async findAll(): Promise<ITransaction[]> {
    const transactions = await this.transactionRepository.findAll();
    return transactions;
  }

  async findById(id: string): Promise<ITransaction | null> {
    const transaction = await this.transactionRepository.findById(id);
    return transaction;
  }

  async create(data: ITransactionCreate): Promise<ITransaction> {
    const { description, amount, date, type, accountId } = data;

    const newTransaction = await this.transactionRepository.create({
      description,
      amount,
      date,
      type,
      accountId,
    });

    return newTransaction;
  }
}

export { TransactionUseCase };
