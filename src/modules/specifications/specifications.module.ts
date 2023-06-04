import { Module } from '@nestjs/common';
import { SpecificationsService } from './specifications.service';
import { SpecificationsController } from './specifications.controller';
import { SpecificationsRepository } from '@repositories/specifications.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Specification,
  SpecificationSchema,
} from './entities/specification.entity';

const mongooseModule = MongooseModule.forFeature([
  { name: Specification.name, schema: SpecificationSchema },
]);

@Module({
  imports: [mongooseModule],
  controllers: [SpecificationsController],
  providers: [
    SpecificationsService,
    {
      provide: 'SpecificationsRepositoryInterface',
      useClass: SpecificationsRepository,
    },
  ],
  exports: [SpecificationsService],
})
export class SpecificationsModule {}
