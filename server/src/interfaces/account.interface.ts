import { ICategory } from "./category.interface";
import { ITransaction } from "./transaction.interface";

interface IAccount {
  id: string;
  userId: string;
  name: string;
  balance: number;
  transactions?: ITransaction[];
  categories?: ICategory[];
}

interface IAccountCreate {
  userId: string;
  name: string;
}

interface IAccountRepository {
  findAll(): Promise<IAccount[]>;
  create(data: IAccountCreate): Promise<IAccount>;
}

export { IAccount, IAccountCreate, IAccountRepository };
