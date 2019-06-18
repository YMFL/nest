import { Module } from '@nestjs/common';
import { Account } from './entity/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Redis } from '../common/utils/redis';
import { AccountService } from './services/account.service';
import { AccountController } from './account.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [AccountService, Redis],
})
export class AccountModule {}
