import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';
import { Image, ImageDocument } from '@modules/Images/entities/image.entity';
import { ImagesRepositoryInterface } from '@modules/images/interfaces/images.interface';

@Injectable()
export class ImagesRepository
  extends BaseRepositoryAbstract<ImageDocument>
  implements ImagesRepositoryInterface
{
  constructor(
    @InjectModel(Image.name)
    private readonly imageModel: Model<ImageDocument>,
  ) {
    super(imageModel);
  }
}
