import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid'; // uuid 버전이 많아서 v1

// 데이터 작업
@Injectable() // 여러 모듈에서 임포트 할 수 있는 인젝트 데코레이터
export class BoardsService {
  private boards: Board[] = []; // private은 다른 컴포넌트의 접근을 차단

  getAllBoards(): Board[] {
    return this.boards;
  }

  // 게시물 생성하는 메서드
  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title, // title: title 과 같은 말
      description, // description: description 같은 말
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board); // boards 에 생성한 데이터 넣기
    return board; // 생성한 데이터 리턴
  }
}
