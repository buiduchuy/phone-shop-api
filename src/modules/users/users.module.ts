import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from '@repositories/users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';

const mongooseModule = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);

@Module({
  imports: [mongooseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: 'UsersRepositoryInterface', useClass: UsersRepository },
  ],
  exports: [UsersService],
})
export class UsersModule {}
