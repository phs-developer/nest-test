import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 30 })
  title: string;

  @Column({ type: 'varchar', length: 2083 })
  content_url: string;

  @Column({ type: 'tinyint', nullable: false })
  sub_category_id: number;

  @Column({ type: 'int', nullable: false })
  user_id: number;

  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
