import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createCommentDto {
  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsNumber()
  readonly userId: number;
}
