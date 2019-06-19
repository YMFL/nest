import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CommonEnum } from '../../common/enums/comminEnum';

@Entity()
export class Account extends BaseEntity {

  @PrimaryGeneratedColumn()
  userId: number;

  @Column({
    unique: true,
    length:20
  })
  mobile: string;

  @Column()
  password: string;

  @Column({
    length:10
  })
  name: string;

  @Column({
    length:50
  })
  address: string;

  @Column({ default: CommonEnum.ISFALSE })
  is_del: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
