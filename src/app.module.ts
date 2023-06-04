import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '@configs/database.config';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '@modules/users/users.module';
import { ProductsModule } from '@modules/products/products.module';
import { ImagesModule } from '@modules/images/images.module';
import { ManufacturersModule } from '@modules/manufacturers/manufacturers.module';
import { VariantsModule } from '@modules/variants/variants.module';
import { SpecificationsModule } from '@modules/specifications/specifications.module';

const configModule = ConfigModule.forRoot({
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test', 'provision', 'staging')
      .default('development'),
    PORT: Joi.number().port().required(),
    DATABASE_PORT: Joi.number().port().required(),
    DATABASE_USERNAME: Joi.string().min(4).required(),
    DATABASE_PASSWORD: Joi.string().min(4).required(),
    DATABASE_HOST: Joi.string().required(),
    DATABASE_URI: Joi.string().required(),
  }),
  validationOptions: {
    abortEarly: false,
  },
  load: [DatabaseConfig],
  isGlobal: true,
  cache: true,
  expandVariables: true,
  envFilePath: process.env.NODE_ENV === 'development' ? '.dev.env' : '.env',
});

const mongooseModule = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('DATABASE_URI'),
    dbName: configService.get<string>('DATABASE_NAME'),
  }),
  inject: [ConfigService],
});

@Module({
  imports: [
    configModule,
    mongooseModule,
    UsersModule,
    ProductsModule,
    ImagesModule,
    ManufacturersModule,
    VariantsModule,
    SpecificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
