import { Inject, Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service';
import { Manufacturer } from './entities/manufacturer.entity';
import { ManufacturersRepositoryInterface } from './interfaces/manufacturers.interface';

@Injectable()
export class ManufacturersService extends BaseServiceAbstract<Manufacturer> {
  constructor(
    @Inject('ManufacturersRepositoryInterface')
    private readonly manufacturersRepository: ManufacturersRepositoryInterface,
  ) {
    super(manufacturersRepository);
  }
}
