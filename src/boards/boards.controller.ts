import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards') // 루트 설정
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get() // CRUD의 R
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards(); //요청 처리는 서비스에서 해결
  }

  @Post() // CRUD 의 C
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    /*
    @Body('title') title: string,
    @Body('description') description: string,
    req는 @Body를 통해 받아온다.
    괄호 안에서 상세 내용 가능하며, @Body() body 로 전체 내용 가져옴.
    */
  ): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  // localhost:5000?id=어쩌구
  @Get('/:id')
  // 모두 가져오려면 @Param(), 특정 값을 가져오려면 @Param('key')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id') // CRUD의 D
  deleteBoards(@Param('id') id: string): void {
    return this.boardsService.deleteById(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ): Board {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
