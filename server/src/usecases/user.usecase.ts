import { IUser } from "../interfaces";
import { UserRepository } from "../repositories";

export class UserUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async findAll(): Promise<Omit<IUser, "password">[]> {
    const users = await this.userRepository.findAll();
    return users.map(this.omitPassword);
  }

  async findById(id: string): Promise<Omit<IUser, "password"> | null> {
    const user = await this.userRepository.findById(id);
    return user ? this.omitPassword(user) : null;
  }

  async findByEmail(email: string): Promise<Omit<IUser, "password"> | null> {
    const user = await this.userRepository.findByEmail(email);
    return user ? this.omitPassword(user) : null;
  }

  async create(user: Omit<IUser, "id">): Promise<Omit<IUser, "password">> {
    const { name, email, password } = user;

    const existingUser = await this.findByEmail(email);

    if (existingUser) {
      throw new Error("Email already in use");
    }

    const newUser = await this.userRepository.create({ name, email, password });

    return this.omitPassword(newUser);
  }

  async update(
    id: string,
    user: Omit<IUser, "id">
  ): Promise<Omit<IUser, "password">> {
    const updatedUser = await this.userRepository.update(id, user);
    return this.omitPassword(updatedUser);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  private omitPassword(user: IUser): Omit<IUser, "password"> {
    const { password, ...userData } = user;
    return userData;
  }
}
