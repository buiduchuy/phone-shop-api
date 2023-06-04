import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';
import {
  Manufacturer,
  ManufacturerDocument,
} from '@modules/Manufacturers/entities/manufacturer.entity';
import { ManufacturersRepositoryInterface } from '@modules/Manufacturers/interfaces/Manufacturers.interface';

@Injectable()
export class ManufacturersRepository
  extends BaseRepositoryAbstract<ManufacturerDocument>
  implements ManufacturersRepositoryInterface
{
  constructor(
    @InjectModel(Manufacturer.name)
    private readonly manufacturerModel: Model<ManufacturerDocument>,
  ) {
    super(manufacturerModel);
  }
}
