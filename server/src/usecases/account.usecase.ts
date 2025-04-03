import { IAccount, IAccountCreate } from "../interfaces";
import { AccountRepository } from "../repositories";

export default class AccountUseCase implements AccountRepository {
  private readonly accountRepository: AccountRepository;

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository;
  }

  findAll(): Promise<IAccount[]> {
    const accounts = this.accountRepository.findAll();
    return accounts;
  }

  create(data: IAccountCreate): Promise<IAccount> {
    const account = this.accountRepository.create(data);
    return account;
  }
}
