import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  subCategoryId: string;

  @IsNotEmpty()
  content: string;
}
