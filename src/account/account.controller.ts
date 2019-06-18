import {
  Controller,
  Param,
  Body,
  ParseIntPipe,
  Get,
  Post,
  Query,
  Delete,
  Put,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { AccountService } from './services/account.service';
import { UserDto, UserNoIdDto } from '../users/dtos/user.dto';
import { PageInfo } from '../common/dtos/pageInfo.entity';

import { UserIdPipe } from '../users/pipes/user-id.pipe';

import { PageRes } from '../common/entity/pageRes';
import { Account } from './entity/account.entity';
import { AccountDto, AccountNoIdDto } from './dtos/account.entity';

@Controller('account')
@UseGuards(new AuthGuard())
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  async findAll(@Query() pageInfo: PageInfo, @Query() query): Promise<PageRes> {
    return await this.accountService.findAll(pageInfo.page, pageInfo.pageSize);
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Account> {
    return await this.accountService.findOne(id);
  }

  @Post()
  async create(@Body() account: AccountNoIdDto): Promise<object> {
    return await this.accountService.create(account);
  }

  @Put()
  async edit(@Body() account: AccountDto): Promise<Account> {
    return await this.accountService.edit(account);
  }

  @Delete(':id')
  async remove(@Param('id', new UserIdPipe()) id): Promise<boolean> {
    return await this.accountService.remove(id);
  }
}
