import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateChatDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'Hello World!' })
  message: string;
}
