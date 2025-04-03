import { IAccount } from "./account.interface";

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  accounts?: IAccount[];
}

interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  create(user: IUserCreate): Promise<IUser>;
  update(id: string, user: IUserCreate): Promise<IUser>;
  delete(id: string): Promise<void>;
}

export { IUser, IUserCreate, IUserRepository };
