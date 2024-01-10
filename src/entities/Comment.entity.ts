import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from './Post.entity';
import { User } from './User.entity';
import { CommentLike } from './CommentLike.entity';

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'comment', length: 100 })
  comment_text: string;

  @Column({ type: 'int', name: 'post_id', nullable: false })
  postId: number;

  @Column({ type: 'int', name: 'user_id', nullable: false })
  userId: number;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => CommentLike, (commentLike) => commentLike.comment)
  commentLikes: CommentLike[];
}
