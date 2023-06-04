import { Image } from '@modules/images/entities/image.entity';
import { Manufacturer } from '@modules/manufacturers/entities/manufacturer.entity';
import { BaseEntity } from '@modules/shared/base/base.entity';
import { User } from '@modules/users/entities/user.entity';
import { Variant } from '@modules/variants/entities/variant.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NextFunction } from 'express';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Product extends BaseEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  user: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Manufacturer.name,
    required: true,
  })
  manufacturer: Manufacturer;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Variant.name,
      },
    ],
  })
  variants: Variant[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Image.name,
      },
    ],
  })
  images: Image[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

export const ProductSchemaFactory = () => {
  const productSchema = ProductSchema;
  console.log(productSchema);

  productSchema.pre('findOne', function (next: NextFunction) {
    this.populate('manufacturer', 'title');
    this.populate('user', 'email');
    this.populate('variants', 'title price quantity');
    this.populate('images', 'title url');
    next();
  });

  return productSchema;
};
