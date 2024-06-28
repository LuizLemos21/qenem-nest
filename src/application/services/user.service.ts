import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../../domain/entities/user.entity';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { UserRepository } from '../../infrastructure/repositories/user.repository';


@Injectable()
export class UserService {
  constructor(
    @InjectQueue('user') private readonly userQueue: Queue,
    @InjectRepository(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create({
      username: createUserDto.username,
      password: createUserDto.password,
      email: createUserDto.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const savedUser = await this.userRepository.save(user);
    if (!savedUser) {
      throw new BadRequestException('User could not be created');
    }

    await this.userQueue.add('createUser', { userId: savedUser.id });

    return savedUser;
  }

  async findOneByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return user;
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
