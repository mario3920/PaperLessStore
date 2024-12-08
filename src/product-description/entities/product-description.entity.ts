import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  headerImgLink: string;

  @Column()
  Collection: string;

  @Column()
  CollectionLink: string;

  @Column()
  variation: string;

  @Column()
  collectionTagColor: string;

  @Column()
  cardGradient: string;

  @OneToOne(() => Product, (product) => product.description)
  product: Product;
}
