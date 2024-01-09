import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardStatus } from './boards.status-enum';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  // 전체조회
  async getAllBoard(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  // 조회
  async getBoardById(id: number): Promise<Board> {
    return await this.boardRepository.findOne(id);
  }

  // 생성
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    return await this.boardRepository.save(board);
  }

  // 삭제
  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);
    console.log(result);
  }

  // 업데이트
  async updateBoard(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;

    await this.boardRepository.save(board);
    console.log(board);
    return board;
  }
}
