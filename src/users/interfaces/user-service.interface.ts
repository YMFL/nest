import {User} from '../entity/user.entity'
import {PageRes} from "../../common/entity/pageRes.entity";

export interface IUsersService {
  findAll(page: number, pageSize: number): Promise<PageRes>;

  findOne(id: number): Promise<User>;

  create(User): Promise<User>;

  edit(User): Promise<User>;

  remove(id: number): Promise<boolean>;
}
