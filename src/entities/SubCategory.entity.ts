import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MainCategory } from './MainCategory.entity';
import { Post } from './Post.entity';

@Entity('sub_category')
export class SubCategory {
  @PrimaryGeneratedColumn({ type: 'tinyint' })
  id: number;

  @Column({ type: 'varchar', name: 'name', nullable: false })
  title: string;

  @OneToMany(() => Post, (post) => post.subCategory)
  posts: Post[];

  @ManyToOne(() => MainCategory, (mainCategory) => mainCategory.subCategories)
  mainCategory: MainCategory;
}
