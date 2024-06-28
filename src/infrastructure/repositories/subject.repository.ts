import { Repository, EntityRepository } from 'typeorm';
import { SubjectOrmEntity } from '../orm/subject.orm-entity';
import { ISubjectRepository } from '../../domain/repositories/isubject.repository';
import { Subject } from '../../domain/entities/subject.entity';

@EntityRepository(SubjectOrmEntity)
export class SubjectRepository extends Repository<SubjectOrmEntity> implements ISubjectRepository {
  async findAll(): Promise<Subject[]> {
    const ormSubjects = await this.find();
    return ormSubjects.map(ormSubject => this.toDomain(ormSubject));
  }

  async findSubjectById(id: number): Promise<Subject | undefined> {
    const ormSubject = await this.findOne({ where: { id } });
    return ormSubject ? this.toDomain(ormSubject) : undefined;
  }

  async saveSubject(subject: Subject): Promise<Subject> {
    const ormSubject = this.create(subject);
    const savedOrmSubject = await this.save(ormSubject);
    return this.toDomain(savedOrmSubject);
  }

  private toDomain(ormSubject: SubjectOrmEntity): Subject {
    return new Subject(
      ormSubject.id,
      ormSubject.name,
    );
  }
}
