import { BaseRepositoryInterface } from '@repositories/base/base.interface.repository';
import { Manufacturer } from '../entities/manufacturer.entity';

export type ManufacturersRepositoryInterface =
  BaseRepositoryInterface<Manufacturer>;
