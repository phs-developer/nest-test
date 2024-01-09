import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('board', { schema: 'test' })
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;
}
