import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../application/services/user.service';
import { UserRepository } from '../infrastructure/repositories/user.repository';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    BullModule.registerQueue({
      name: 'user',
    }),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
