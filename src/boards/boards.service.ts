import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid'; // uuid 버전이 많아서 v1
import { CreateBoardDto } from './dto/create-board.dto';

// 데이터 작업
@Injectable() // 여러 모듈에서 임포트 할 수 있는 인젝트 데코레이터
export class BoardsService {
  private boards: Board[] = []; // private은 다른 컴포넌트의 접근을 차단

  getAllBoards(): Board[] {
    return this.boards;
  }

  // 게시물 생성하는 메서드
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title, // title: title 과 같은 말
      description, // description: description 같은 말
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board); // boards 에 생성한 데이터 넣기
    return board; // 생성한 데이터 리턴
  }

  // 조회할 id의 정보를 boards에서 찾아서 return.
  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  // 데이터 삭제. return은 따로 안해서 void
  deleteById(id: string): void {
    this.boards = this.boards.filter((boards) => boards.id !== id);
    // id가 같지 않지 않은 것만 남겨둔다. == 같은 거는 제외한다(삭제)
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id); // id에 대한 board 정보 가져오기
    board.status = status; // status 업데이트
    return board; // 업데이트 된 정보 내보내기
  }
}
