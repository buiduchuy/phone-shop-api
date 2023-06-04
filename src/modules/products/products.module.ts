import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from '@repositories/products.repository';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Product, ProductSchemaFactory } from './entities/product.entity';
import {
  Variant,
  VariantSchema,
} from '@modules/variants/entities/variant.entity';
import { Image, ImageSchema } from '@modules/images/entities/image.entity';

// const mongooseModule = MongooseModule.forFeature([
//   { name: Product.name, schema: ProductSchema },
// ]);

const mongooseModule = MongooseModule.forFeatureAsync([
  {
    name: Product.name,
    useFactory: ProductSchemaFactory,
    inject: [getModelToken(Variant.name), getModelToken(Image.name)],
    imports: [
      MongooseModule.forFeature([
        { name: Variant.name, schema: VariantSchema },
        { name: Image.name, schema: ImageSchema },
      ]),
    ],
  },
]);

@Module({
  imports: [mongooseModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    { provide: 'ProductsRepositoryInterface', useClass: ProductsRepository },
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
