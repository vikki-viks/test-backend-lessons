import { ApiProperty } from '@nestjs/swagger';
import { GetUserResponse } from 'src/users/api/get-user-response';

export class GetEvaluationResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  score: number;

  @ApiProperty({ type: GetUserResponse })
  user: GetUserResponse;
}
