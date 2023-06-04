import { Module } from '@nestjs/common';
import { ManufacturersService } from './manufacturers.service';
import { ManufacturersController } from './manufacturers.controller';
import { ManufacturersRepository } from '@repositories/manufacturers.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Manufacturer,
  ManufacturerSchema,
} from './entities/manufacturer.entity';

const mongooseModule = MongooseModule.forFeature([
  { name: Manufacturer.name, schema: ManufacturerSchema },
]);

@Module({
  imports: [mongooseModule],
  controllers: [ManufacturersController],
  providers: [
    ManufacturersService,
    {
      provide: 'ManufacturersRepositoryInterface',
      useClass: ManufacturersRepository,
    },
  ],
  exports: [ManufacturersService],
})
export class ManufacturersModule {}
