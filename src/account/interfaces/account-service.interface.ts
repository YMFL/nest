import { Account } from '../entity/account.entity';
import { PageRes } from '../../common/entity/pageRes';

export interface IAccountService {
  findAll(
    page: number,
    pageSize: number,
    name: string,
    age: number,
  ): Promise<PageRes>;

  findOne(id: number): Promise<Account>;

  create(Account): Promise<object>;

  edit(Account): Promise<Account>;

  remove(id: number): Promise<boolean>;
}
