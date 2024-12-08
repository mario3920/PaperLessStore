import { Injectable } from '@nestjs/common';
import { CreateProductDescriptionDto } from './dto/create-product-description.dto';
import { UpdateProductDescriptionDto } from './dto/update-product-description.dto';

@Injectable()
export class ProductDescriptionService {
  create(createProductDescriptionDto: CreateProductDescriptionDto) {
    return 'This action adds a new productDescription';
  }

  findAll() {
    return `This action returns all productDescription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productDescription`;
  }

  update(id: number, updateProductDescriptionDto: UpdateProductDescriptionDto) {
    return `This action updates a #${id} productDescription`;
  }

  remove(id: number) {
    return `This action removes a #${id} productDescription`;
  }
}
