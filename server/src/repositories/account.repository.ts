import { prisma } from "../database/prisma-client";
import {
  IAccount,
  IAccountCreate,
  IAccountRepository,
} from "../interfaces/account.interface";

export default class AccountRepository implements IAccountRepository {
  findAll(): Promise<IAccount[]> {
    return prisma.account.findMany();
  }

  create(data: IAccountCreate): Promise<IAccount> {
    return prisma.account.create({ data });
  }
}
