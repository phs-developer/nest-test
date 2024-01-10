import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from './Post.entity';
import { PostLike } from './PostLike.entity';
import { Comment } from './Comment.entity';
import { CommentLike } from './CommentLike.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'passowrd', nullable: false })
  passowrd: string;

  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column()
  user_img_url: string;

  // 왜 CreateDateColumn 가 아닌 Column으로 사용 후, timestamp를 사용하셨는지.
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => PostLike, (postLike) => postLike.user)
  postLikes: PostLike[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @ManyToOne(() => CommentLike, (commentLike) => commentLike.user)
  commentLikes: CommentLike[];
}
