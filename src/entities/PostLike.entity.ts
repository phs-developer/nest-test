import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './Post.entity';
import { User } from './User.entity';

@Entity('post_like')
export class PostLike {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'int', name: 'post_id', nullable: false })
  postId: number;

  @Column({ type: 'int', name: 'user_id', nullable: false })
  userId: number;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @ManyToOne(() => Post, (post) => post.postLikes)
  post: Post;

  @ManyToOne(() => User, (user) => user.postLikes)
  user: User;
}
