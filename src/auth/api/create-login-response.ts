import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginResponse {
  @ApiProperty()
  accessToken: string;
}
