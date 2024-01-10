import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './Comment.entity';
import { User } from './User.entity';

@Entity('comment_like')
export class CommentLike {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'int', name: 'comment_id', nullable: false })
  commentId: number;

  @Column({ type: 'int', name: 'user_id', nullable: false })
  userId: number;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @ManyToOne(() => Comment, (comment) => comment.commentLikes)
  comment: Comment;

  @ManyToOne(() => User, (user) => user.commentLikes)
  user: Comment;
}
