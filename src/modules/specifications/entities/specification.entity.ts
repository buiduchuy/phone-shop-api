import { Product } from '@modules/products/entities/product.entity';
import { BaseEntity } from '@modules/shared/base/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type SpecificationDocument = mongoose.HydratedDocument<Specification>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Specification extends BaseEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  value: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Product.name,
    required: true,
  })
  product: Product;
}

export const SpecificationSchema = SchemaFactory.createForClass(Specification);
