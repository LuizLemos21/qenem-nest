import { User } from '../entities/user.entity';

export interface IUserRepository {
  findOneByUsername(username: string): Promise<User | undefined>;
  findOneById(id: number): Promise<User | undefined>;
  save(user: User): Promise<User>;
}
