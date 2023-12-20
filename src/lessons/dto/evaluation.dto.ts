import { ApiProperty } from '@nestjs/swagger';

export class EvaluationsDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  score: number;
}
