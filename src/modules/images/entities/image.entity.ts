import { Product } from '@modules/products/entities/product.entity';
import { BaseEntity } from '@modules/shared/base/base.entity';
import { User } from '@modules/users/entities/user.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ImageDocument = mongoose.HydratedDocument<Image>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Image extends BaseEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  url: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  })
  product: Product;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  user: User;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
