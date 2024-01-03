// 객체의 유효성 검사
// interface와 class를 통한 정의.

import { IsNotEmpty } from 'class-validator';

// class는 런타임에서 작동하기 때문에 추천
export class CreateBoardDto {
  @IsNotEmpty() // pipe
  title: string;

  @IsNotEmpty() // pipe
  description: string;
}
