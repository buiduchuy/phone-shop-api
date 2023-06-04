import {
  Specification,
  SpecificationDocument,
} from '@modules/specifications/entities/specification.entity';
import { SpecificationsRepositoryInterface } from '@modules/specifications/interfaces/specifications.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';

@Injectable()
export class SpecificationsRepository
  extends BaseRepositoryAbstract<SpecificationDocument>
  implements SpecificationsRepositoryInterface
{
  constructor(
    @InjectModel(Specification.name)
    private readonly specificationModel: Model<SpecificationDocument>,
  ) {
    super(specificationModel);
  }
}
