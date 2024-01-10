import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubCategory } from './SubCategory.entity';

@Entity('main_category')
export class MainCategory {
  @PrimaryGeneratedColumn({ type: 'tinyint', name: 'id' })
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 20 })
  title: string;

  @OneToMany(() => SubCategory, (subCategory) => subCategory.mainCategory)
  subCategories: SubCategory[];
}
