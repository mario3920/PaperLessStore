import { Purchase } from 'src/purchase/entities/purchase.entity';
import { UserRole } from 'src/utils/enums';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  role: string;

  @OneToMany(() => Purchase, (purchase) => purchase.user)
  purchases: Purchase[];
}
