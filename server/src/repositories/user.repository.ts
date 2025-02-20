import { prisma } from "../database/prisma-client";
import { IUser, IUserDTO, IUserRepository } from "../interfaces";

export class UserRepository implements IUserRepository {
  findAll(): Promise<IUser[]> {
    return prisma.user.findMany();
  }

  findById(id: string): Promise<IUser | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  findByEmail(email: string): Promise<IUser | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  create(user: IUserDTO): Promise<IUser> {
    return prisma.user.create({ data: user });
  }

  update(id: string, user: IUserDTO): Promise<IUser> {
    return prisma.user.update({ where: { id }, data: user });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
}
