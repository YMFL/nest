import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUsersService } from '../interfaces/user-service.interface';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { PageRes } from '../../common/entity/pageRes';
import jwt from 'jwt-simple'
import { MyLogger } from '../../common/utils/myLogger'

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(
    page: number = 1,
    pageSize: number = 10,
    name: string,
    age: number,
  ): Promise<PageRes> {

    let where = [];
    name && where.push({ name });
    age && where.push({ age });
    let [list, count] = await this.usersRepository.findAndCount({
      where: where,
      order: {
        createdAt: 'DESC',
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
    let pageRes = new PageRes();
    pageRes.list = list;
    pageRes.page = page;
    pageRes.count = count;
    pageRes.pageSize = pageSize;
    MyLogger.error(JSON.stringify(pageRes))
    return pageRes;
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async create(user: User): Promise<object> {
    await this.usersRepository.insert(user);
    console.log(user.id)
    var token = jwt.encode(user.id,'yqh');
    console.log(token)
    console.log(jwt.decode(token,'yqh'))
    return {token};
  }

  async edit(user: User): Promise<User> {
    await this.usersRepository.update(user.id, user);
    return user;
  }

  async remove(id: number): Promise<boolean> {
    await this.usersRepository.delete(id);
    return true;
  }
}
