//데이터의 타입을 지정하기 위한 공간
// interface 혹은 classes 로 타입을 지정한다.
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus; // 공개글 혹은 비공개글 2개의 값만 가능
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
