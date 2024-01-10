import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'comment', length: 100 })
  comment_text: string;

  @Column({ type: 'int', name: 'post_id', nullable: false })
  post_id: number;

  @Column({ type: 'int', name: 'user_id', nullable: false })
  user_id: number;

  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
