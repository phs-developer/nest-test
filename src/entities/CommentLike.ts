import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('comment_like')
export class CommentLike {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'int', name: 'comment_id', nullable: false })
  comment_id: number;

  @Column({ type: 'int', name: 'user_id', nullable: false })
  user_id: number;

  @CreateDateColumn({ nullable: false })
  created_at: Date;
}
