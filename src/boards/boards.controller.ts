import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards') // 루트 설정
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get() // CRUD의 R
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards(); //요청 처리는 서비스에서 해결
  }

  @Post() // CRUD 의 C
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string, // req는 @Body를 통해 받아온다.
    // 괄호 안에서 상세 내용 가능하며, @Body() body 로 전체 내용 가져옴.
  ): Board {
    return this.boardsService.createBoard(title, description);
  }
}
