import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { ImagesRepository } from '@repositories/images.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Image, ImageSchema } from './entities/image.entity';
import {
  Product,
  ProductSchema,
} from '@modules/products/entities/product.entity';

const mongooseModule = MongooseModule.forFeature([
  { name: Image.name, schema: ImageSchema },
  { name: Product.name, schema: ProductSchema },
]);

@Module({
  imports: [mongooseModule],
  controllers: [ImagesController],
  providers: [
    ImagesService,
    {
      provide: 'ImagesRepositoryInterface',
      useClass: ImagesRepository,
    },
  ],
  exports: [ImagesService],
})
export class ImagesModule {}
