import { Module } from '@nestjs/common';
import { VariantsService } from './variants.service';
import { VariantsController } from './variants.controller';
import { VariantsRepository } from '@repositories/variants.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Variant, VariantSchema } from './entities/variant.entity';
import {
  Product,
  ProductSchema,
} from '@modules/products/entities/product.entity';

const mongooseModule = MongooseModule.forFeature([
  { name: Variant.name, schema: VariantSchema },
  { name: Product.name, schema: ProductSchema },
]);

@Module({
  imports: [mongooseModule],
  controllers: [VariantsController],
  providers: [
    VariantsService,
    { provide: 'VariantsRepositoryInterface', useClass: VariantsRepository },
  ],
  exports: [VariantsService],
})
export class VariantsModule {}
