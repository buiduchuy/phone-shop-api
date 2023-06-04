import { BaseEntity } from '@modules/shared/base/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ManufacturerDocument = HydratedDocument<Manufacturer>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Manufacturer extends BaseEntity {
  @Prop({
    unique: true,
    required: true,
  })
  title: string;
}

export const ManufacturerSchema = SchemaFactory.createForClass(Manufacturer);
