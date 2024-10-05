import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/common/models/user/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}