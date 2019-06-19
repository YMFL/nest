import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Redis } from '../../common/utils/redis';
import { Account } from '../entity/account.entity';
import { Repository } from 'typeorm';
import { PageRes } from '../../common/entity/pageRes';
import jwt from 'jwt-simple';
import md5 from 'md5';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
    private redis: Redis,
  ) {}

  async findAll(page: number = 1, pageSize: number = 10): Promise<PageRes> {
    let where = [];
    let [list, count] = await this.accountRepository.findAndCount({
      where: where,
      order: {
        createdAt: 'DESC',
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
    let pageRes = new PageRes();
    for (let x in list) {
      let account = new Account();
      account.userId = list[x].userId;
      account.mobile = list[x].mobile;
      account.name = list[x].name;
      account.address = list[x].address;
      account.is_del = list[x].is_del;
      account.createdAt = list[x].createdAt;
      account.updatedAt = list[x].updatedAt;
      pageRes.list.push(account);
    }
    pageRes.page = page;
    pageRes.count = count;
    pageRes.pageSize = pageSize;
    return pageRes;
  }
  async findOne(id: number): Promise<Account> {
    return await this.accountRepository.findOne(id);
  }
  async create(account: Account): Promise<object> {
    let acc = new Account();
    acc.password = md5(account.password);
    acc.mobile = account.mobile;
    await this.accountRepository.insert(acc);
    let token = jwt.encode(acc.userId, 'yqh');
    this.redis.set(token);
    return { token };
  }
  async edit(account: Account): Promise<Account> {
    await this.accountRepository.update(account.userId, account);
    return account;
  }

  async remove(id: number): Promise<boolean> {
    await this.accountRepository.delete(id);
    return true;
  }
}
