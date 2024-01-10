import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('post_like')
export class PostLike {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'int', name: 'post_id', nullable: false })
  post_id: number;

  @Column({ type: 'int', name: 'user_id', nullable: false })
  user_id: number;

  @CreateDateColumn({ nullable: false })
  created_at: Date;
}
