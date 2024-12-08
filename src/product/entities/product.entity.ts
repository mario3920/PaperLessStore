import { ProductDescription } from 'src/product-description/entities/product-description.entity';
import { ProductPriceCategory, ProductThemeCategory, ProductType } from 'src/utils/enums';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  SKU: string;

  @Column()
  imageUrl: string;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column({ type: 'enum', enum: ProductType })
  type: string;

  @Column()
  variation: number;

  @Column({ type: 'enum', enum: ProductPriceCategory })
  PriceCategory: string

  @Column({ type: 'enum', enum: ProductThemeCategory })
  Theme: string[]

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @OneToOne(() => ProductDescription, (description) => description.product)
  description: ProductDescription;
}
