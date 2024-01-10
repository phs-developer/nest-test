import {
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

  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @ManyToOne(() => Post, (post) => post.postLikes)
  post: Post;

  @ManyToOne(() => User, (user) => user.postLikes)
  user: User;
}
