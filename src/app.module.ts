import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';
import { EnemModule } from './modules/enem.module';
import { SubjectModule } from './modules/subject.module';
import { QuestionModule } from './modules/question.module';
import { SimulationModule } from './modules/simulation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'questenem',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'user',
    }),
    UserModule,
    AuthModule,
    EnemModule,
    SubjectModule,
    QuestionModule,
    SimulationModule,
  ],
})
export class AppModule {}
