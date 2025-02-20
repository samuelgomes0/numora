import { IAccount } from "./account.interface";

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  accounts?: IAccount[];
}

interface IUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  create(user: IUserDTO): Promise<IUser>;
  update(id: string, user: IUserDTO): Promise<IUser>;
  delete(id: string): Promise<void>;
}

export { IUser, IUserDTO, IUserRepository };
