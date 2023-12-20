import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { Lesson } from 'src/entity/lesson.entity';
import { Evaluation } from 'src/entity/evaluation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Evaluation])],
  controllers: [LessonController],
  providers: [LessonService],
  exports: [LessonService],
})
export class LessonModule {}
