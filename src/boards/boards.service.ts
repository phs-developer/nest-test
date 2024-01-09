import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { BoardStatus } from './boards.status-enum';

@Injectable() // 여러 모듈에서 임포트 할 수 있는 인젝트 데코레이터
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  // 전체 조회
  async getAllBoard(): Promise<Board[]> {
    return await this.boardRepository.getAllBoard();
  }

  // 조회
  async getBoardByID(id: number): Promise<Board> {
    return await this.boardRepository.getBoardById(id);
  }

  // 생성
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.boardRepository.createBoard(createBoardDto);
  }

  // 삭제
  deleteBoard(id: number): Promise<void> {
    return this.boardRepository.deleteBoard(id);
  }

  // 업데이트
  async updateBoard(id: number, status: BoardStatus): Promise<Board> {
    return await this.boardRepository.updateBoard(id, status);
  }
}
