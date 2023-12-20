import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from 'src/entity/lesson.entity';
import { LessonDto } from './dto/lesson.dto';
import { Evaluation } from 'src/entity/evaluation.entity';
import { EvaluationsDto } from './dto/evaluation.dto';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonsRepository: Repository<Lesson>,
    @InjectRepository(Evaluation)
    private evaluationsRepository: Repository<Evaluation>,
  ) {}

  async getList() {
    return this.lessonsRepository.find({
      select: {
        evaluations: {
          user: {
            email: true,
            id: true,
            name: true,
          },
          id: true,
          score: true,
        },
        code: true,
        id: true,
        name: true,
      },
      relations: {
        evaluations: {
          user: true,
        },
      },
    });
  }

  async createLesson({ name, code }: LessonDto) {
    const newLesson = await this.lessonsRepository.insert({ name, code });
    const id = newLesson.identifiers[0].id;
    return { id, name, code };
  }

  async createEvaluations(
    lessonId: number,
    { user_id, score }: EvaluationsDto,
  ) {
    const newEvaluations = await this.evaluationsRepository.insert({
      user: { id: user_id },
      lesson: { id: lessonId },
      score,
    });
    const id = newEvaluations.identifiers[0].id;
    return { id, user_id, score };
  }
}
