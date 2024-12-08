import { Purchase } from 'src/purchase/entities/purchase.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  
  @OneToMany(() => Purchase, (purchase) => purchase.user)
  purchases: Purchase[]
}
