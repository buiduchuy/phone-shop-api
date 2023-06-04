import { Manufacturer } from '@modules/manufacturers/entities/manufacturer.entity';
import { Product } from '@modules/products/entities/product.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateVariantDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  product: Product;
}
