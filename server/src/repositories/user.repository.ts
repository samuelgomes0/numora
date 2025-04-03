import { prisma } from "../database/prisma-client";
import { IUser, IUserCreate, IUserRepository } from "../interfaces";

export default class UserRepository implements IUserRepository {
  findAll(): Promise<IUser[]> {
    return prisma.user.findMany();
  }

  findById(id: string): Promise<IUser | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  findByEmail(email: string): Promise<IUser | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  create(user: IUserCreate): Promise<IUser> {
    return prisma.user.create({ data: user });
  }

  update(id: string, user: IUserCreate): Promise<IUser> {
    return prisma.user.update({ where: { id }, data: user });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
}
