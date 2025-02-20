import { ICategory } from "./category.interface";
import { ITransaction } from "./transaction.interface";

interface IAccount {
  id: string;
  userId: string;
  name: string;
  balance: number;
  transactions: ITransaction[];
  categories: ICategory[];
}

export { IAccount };
