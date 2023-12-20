import { ApiProperty } from '@nestjs/swagger';

export class CreateEvaluationResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  score: string;
}
