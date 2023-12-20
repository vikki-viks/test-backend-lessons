import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonDto } from './dto/lesson.dto';
import { EvaluationsDto } from './dto/evaluation.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetLessonResponse } from './api/get-lesson-response';
import { CreateLessonResponse } from './api/create-lesson-response';
import { CreateEvaluationResponse } from './api/create-evaluation-response';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('lessons')
@Controller('api/lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @ApiOperation({
    description: 'Получение списка занятий с оценками пользователей',
  })
  @ApiResponse({
    status: 200,
    type: [GetLessonResponse],
  })
  @UseGuards(AuthGuard)
  @Get()
  async getList(): Promise<GetLessonResponse[]> {
    return await this.lessonService.getList();
  }

  @ApiOperation({
    description: 'Проставление оценки за занятие',
  })
  @ApiResponse({
    status: 200,
    type: CreateEvaluationResponse,
  })
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'Передается id определенного урока',
  })
  @UseGuards(AuthGuard)
  @Post(':id/evaluations')
  async getEvaluations(
    @Param('id') lessonId: number,
    @Body() evaluationsDto: EvaluationsDto,
  ) {
    return await this.lessonService.createEvaluations(lessonId, evaluationsDto);
  }

  @ApiOperation({ description: 'Создание занятия' })
  @ApiResponse({
    status: 200,
    type: CreateLessonResponse,
  })
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() lessonDto: LessonDto) {
    return await this.lessonService.createLesson(lessonDto);
  }
}
