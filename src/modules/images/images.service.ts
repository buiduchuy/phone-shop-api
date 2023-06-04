import { Inject, Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service';
import { Image } from './entities/image.entity';
import { ImagesRepositoryInterface } from './interfaces/images.interface';

@Injectable()
export class ImagesService extends BaseServiceAbstract<Image> {
  constructor(
    @Inject('ImagesRepositoryInterface')
    private readonly productRepository: ImagesRepositoryInterface,
  ) {
    super(productRepository);
  }
}
