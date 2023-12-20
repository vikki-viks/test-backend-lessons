import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  code: string;
}
