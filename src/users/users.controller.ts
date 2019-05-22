import {
  Controller,
  Param,
  Body,
  ParseIntPipe,
  Get,
  Post,
  Delete,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {User} from './entity/user.entity'
import { UsersService } from './services/users.service';
import { UserIdPipe } from './pipes/user-id.pipe';
import { UserDto,UserNoIdDto } from './dtos/user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new UserIdPipe()) id): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() user:UserNoIdDto) :Promise<User>{
    return await this.usersService.create(user);
  }

  @Put()
  async edit(@Body() user:UserDto) :Promise<User> {
    return await this.usersService.edit(user);
  }

  @Delete(':id')
  async remove(@Param('id' ,new UserIdPipe()) id):Promise<boolean> {
    return await this.usersService.remove(id);
  }
}
