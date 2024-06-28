import { Subject } from '../entities/subject.entity';

export interface ISubjectRepository {
  findAll(): Promise<Subject[]>;
  findSubjectById(id: number): Promise<Subject | undefined>;
  save(subject: Subject): Promise<Subject>;
}
