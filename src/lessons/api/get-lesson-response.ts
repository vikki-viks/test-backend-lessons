import { ApiProperty } from '@nestjs/swagger';
import { GetEvaluationResponse } from './get-evaluation-response';

export class GetLessonResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  code: string;

  @ApiProperty({ type: [GetEvaluationResponse] })
  evaluations: GetEvaluationResponse[];
}
