import { Inject, Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service';
import { Product } from './entities/product.entity';
import { ProductsRepositoryInterface } from './interfaces/products.interface';

@Injectable()
export class ProductsService extends BaseServiceAbstract<Product> {
  constructor(
    @Inject('ProductsRepositoryInterface')
    private readonly productRepository: ProductsRepositoryInterface,
  ) {
    super(productRepository);
  }
}
