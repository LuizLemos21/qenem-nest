import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectRepository } from '../../infrastructure/repositories/subject.repository';
import { Subject } from '../../domain/entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectRepository) private readonly subjectRepository: SubjectRepository,
  ) {}

  async findAll(): Promise<Subject[]> {
    return this.subjectRepository.findAll();
  }

  async findOneById(id: number): Promise<Subject> {
    const subject = await this.subjectRepository.findSubjectById(id);
    if (!subject) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }
    return subject;
  }

  async create(subject: Subject): Promise<Subject> {
    return this.subjectRepository.saveSubject(subject);
  }
}
