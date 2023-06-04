import { Manufacturer } from '@modules/manufacturers/entities/manufacturer.entity';
import { User } from '@modules/users/entities/user.entity';
import { Variant } from '@modules/variants/entities/variant.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  user?: User;

  @IsNotEmpty()
  manufacturer?: Manufacturer;
}
