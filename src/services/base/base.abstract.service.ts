import { BaseEntity } from '@modules/shared/base/base.entity';
import { BaseRepositoryInterface } from '@repositories/base/base.interface.repository';
import { FindAllResponse } from 'src/types/common.type';
import { BaseServiceInterface } from './base.interface.service';

export abstract class BaseServiceAbstract<T extends BaseEntity>
  implements BaseServiceInterface<T>
{
  constructor(private readonly repository: BaseRepositoryInterface<T>) {}

  async create(createDto: T | any): Promise<T> {
    return await this.repository.create(createDto);
  }

  async findAll(
    filter?: object,
    projection?: string | object,
    options?: object,
  ): Promise<FindAllResponse<T>> {
    return await this.repository.findAll(filter, projection, options);
  }
  async findOne(id: string, projection?: string, options?: object) {
    return await this.repository.findOneById(id, projection, options);
  }

  async findOneByCondition(filter: Partial<T>) {
    return await this.repository.findOneByCondition(filter);
  }

  async update(id: string, updateDto: Partial<T>) {
    return await this.repository.update(id, updateDto);
  }

  async remove(id: string) {
    return await this.repository.softDelete(id);
  }
}
