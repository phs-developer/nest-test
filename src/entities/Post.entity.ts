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
import { SubCategory } from './SubCategory.entity';
import { User } from './User.entity';
import { PostLike } from './PostLike.entity';
import { Comment } from './Comment.entity';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 30 })
  title: string;

  @Column({ type: 'varchar', length: 2083 })
  contentUrl: string;

  @Column({ type: 'tinyint', nullable: false })
  subCategoryId: number;

  @Column({ type: 'int', nullable: false })
  userId: number;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => PostLike, (postlike) => postlike.post)
  postLikes: PostLike[];

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.posts)
  subCategory: SubCategory;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
