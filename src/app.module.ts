import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './modules/user.module'
import { AuthModule } from './modules/auth.module';
import { QuestionModule } from './modules/question.module';
import { EnemModule } from './modules/enem.module';
import { SubjectModule } from './modules/subject.module';
import { SimulationModule } from './modules/simulation.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // Note: This should be disabled in production
    }),
    UserModule,
    AuthModule,
    QuestionModule,
    EnemModule,
    SubjectModule,
    SimulationModule,
  ],
})
export class AppModule {}
