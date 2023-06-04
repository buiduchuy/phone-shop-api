import { BaseRepositoryInterface } from '@repositories/base/base.interface.repository';
import { Specification } from '../entities/specification.entity';

export type SpecificationsRepositoryInterface =
  BaseRepositoryInterface<Specification>;
