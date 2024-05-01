import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString({ message: 'O atributo content deve ser uma string' })
  content: string;
}
