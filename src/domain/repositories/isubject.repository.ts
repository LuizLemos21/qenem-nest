import { Subject } from '../entities/subject.entity';

export interface ISubjectRepository {
  findAll(): Promise<Subject[]>;
  findOne(id: number): Promise<Subject | undefined>;
  save(subject: Subject): Promise<Subject>;
}
