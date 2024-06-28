import { Repository, EntityRepository } from 'typeorm';
import { UserOrmEntity } from '../orm/user.orm-entity';
import { IUserRepository } from '../../domain/repositories/iuser.repository';
import { User } from '../../domain/entities/user.entity';
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

@Injectable()
@EntityRepository(UserOrmEntity)
export class UserRepository extends Repository<UserOrmEntity> implements IUserRepository {
  async findOneByUsername(username: string): Promise<User | undefined> {
    const ormUser = await this.findOne({ where: { username } });
    if (!ormUser) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return this.toDomain(ormUser);
  }

  async findOneById(id: number): Promise<User | undefined> {
    const ormUser = await this.findOne({ where: { id } });
    if (!ormUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.toDomain(ormUser);
  }

  async saveUser(user: User): Promise<User> {
    try {
      const ormUser = this.create(user);
      const savedOrmUser = await this.save(ormUser);
      return this.toDomain(savedOrmUser);
    } catch (error) {
      throw new BadRequestException('User could not be saved');
    }
  }

  private toDomain(ormUser: UserOrmEntity): User {
    return new User(
      ormUser.id,
      ormUser.username,
      ormUser.password,
      ormUser.email,
      ormUser.createdAt,
      ormUser.updatedAt,
    );
  }
}
