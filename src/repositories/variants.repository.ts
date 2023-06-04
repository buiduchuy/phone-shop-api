import {
  Variant,
  VariantDocument,
} from '@modules/variants/entities/variant.entity';
import { VariantsRepositoryInterface } from '@modules/variants/interfaces/variants.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';

@Injectable()
export class VariantsRepository
  extends BaseRepositoryAbstract<VariantDocument>
  implements VariantsRepositoryInterface
{
  constructor(
    @InjectModel(Variant.name)
    private readonly variantModel: Model<VariantDocument>,
  ) {
    super(variantModel);
  }
}
