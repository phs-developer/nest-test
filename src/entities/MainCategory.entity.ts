import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('main_category')
export class MainCategory {
  @PrimaryGeneratedColumn({ type: 'tinyint', name: 'id' })
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 20 })
  title: string;
}
