import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne( () => User, (user) => user.purchases )
  user: User;

  @ManyToOne( ()=> Product, (product) => product.purchases )
  product: Product;
}
