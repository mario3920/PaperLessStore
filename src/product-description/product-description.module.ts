import { Module } from '@nestjs/common';
import { ProductDescriptionService } from './product-description.service';
import { ProductDescriptionController } from './product-description.controller';

@Module({
  controllers: [ProductDescriptionController],
  providers: [ProductDescriptionService],
})
export class ProductDescriptionModule {}
