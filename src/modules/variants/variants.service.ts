import { Inject, Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service';
import { Variant } from './entities/variant.entity';
import { VariantsRepositoryInterface } from './interfaces/variants.interface';

@Injectable()
export class VariantsService extends BaseServiceAbstract<Variant> {
  constructor(
    @Inject('VariantsRepositoryInterface')
    private readonly variantRepository: VariantsRepositoryInterface,
  ) {
    super(variantRepository);
  }
}
