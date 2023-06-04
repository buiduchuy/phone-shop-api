import {
  Product,
  ProductDocument,
} from '@modules/products/entities/product.entity';
import { ProductsRepositoryInterface } from '@modules/products/interfaces/products.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';

@Injectable()
export class ProductsRepository
  extends BaseRepositoryAbstract<ProductDocument>
  implements ProductsRepositoryInterface
{
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {
    super(productModel);
  }
}
