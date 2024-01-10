import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sub_category')
export class SubCategory {
  @PrimaryGeneratedColumn({ type: 'tinyint' })
  id: number;

  @Column({ type: 'varchar', name: 'name', nullable: false })
  title: string;

  @Column({
    type: 'tinyint',
    name: 'main_category_id',
    nullable: false,
  })
  main_category_id: number;
}
