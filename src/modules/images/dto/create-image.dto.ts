import { User } from '@modules/users/entities/user.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  user: User;
}
