import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { QuestionsModule } from './questions/questions.module';
import { SimulationsModule } from './simulations/simulations.module';
import { User } from './users/user.entity';
import { Question } from './questions/question.entity';
import { Simulation } from './simulations/simulation.entity';
import { Answer } from './answers/answer.entity';
import { Subject } from './subjects/subject.entity';
import { Topic } from './topics/topic.entity';
import { Feedback } from './feedback/feedback.entity';
import { Admin } from './admins/admin.entity';
import { Session } from './sessions/session.entity';
import { Role } from './roles/role.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'questenem',
      entities: [User, Question, Simulation, Answer, Subject, Topic, Feedback, Admin, Session, Role],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    QuestionsModule,
    SimulationsModule,
  ],
})
export class AppModule{};
