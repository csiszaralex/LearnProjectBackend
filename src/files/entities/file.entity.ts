import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('files')
export class File extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  file: string;

  @Column()
  path: string;

  @Column()
  mime: string;

  @Column()
  size: number;

  @Column({ default: 0 })
  downloads: number;
}
