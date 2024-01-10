import {
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

  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @ManyToOne(() => Comment, (comment) => comment.commentLikes)
  comment: Comment;

  @ManyToOne(() => User, (user) => user.commentLikes)
  user: Comment;
}
