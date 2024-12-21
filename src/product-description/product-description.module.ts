import { Module } from '@nestjs/common';
import { ProductDescriptionService } from './product-description.service';
import { ProductDescriptionController } from './product-description.controller';
import { ProductDescription } from './entities/product-description.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDescription])],
  controllers: [ProductDescriptionController],
  providers: [ProductDescriptionService],
})
export class ProductDescriptionModule {}
