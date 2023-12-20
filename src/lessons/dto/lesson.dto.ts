import { ApiProperty } from '@nestjs/swagger';

export class LessonDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  code: string;
}
