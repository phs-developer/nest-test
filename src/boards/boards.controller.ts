import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { BoardStatus } from './boards.status-enum';

@Controller('boards') // 루트 설정
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/ping')
  ping() {
    return 'pong';
  }

  @Get('/all')
  getAllBoard(): Promise<Board[]> {
    return this.boardsService.getAllBoard();
  }

  @Get('/:id')
  getBoardByID(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardByID(id);
  }

  @Post() // CRUD 의 C
  @UsePipes(ValidationPipe) // built-in pipes
  async createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.boardsService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }

  @Patch('/:id')
  async updateBoard(
    @Param('id') id: number,
    @Body('status') status: BoardStatus,
  ): Promise<Board> {
    console.log(id);
    return await this.boardsService.updateBoard(id, status);
  }
}
