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
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { UsersService } from './services/users.service';
import { UserIdPipe } from './pipes/user-id.pipe';
import { UserDto, UserNoIdDto, PageInfo } from './dtos/user.dto';
import { PageRes } from '../common/entity/pageRes.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Query() pageInfo: PageInfo, @Query() query): Promise<PageRes> {
    console.log(pageInfo);
    return await this.usersService.findAll(
      pageInfo.page,
      pageInfo.pageSize,
      query.name,
      query.age,
    );
  }

  @Get(':id')
  async findOne(@Param('id', new UserIdPipe()) id): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() user: UserNoIdDto): Promise<User> {
    return await this.usersService.create(user);
  }

  @Put()
  async edit(@Body() user: UserDto): Promise<User> {
    return await this.usersService.edit(user);
  }

  @Delete(':id')
  async remove(@Param('id', new UserIdPipe()) id): Promise<boolean> {
    return await this.usersService.remove(id);
  }
}
