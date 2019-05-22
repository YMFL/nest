import {Injectable, Param} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {IUsersService} from '../interfaces/user-service.interface';
import {User} from '../entity/user.entity'
import {Repository} from 'typeorm';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne(id)
  }

  async create(user: User): Promise<User> {
    await this.usersRepository.insert(user)
    return user;
  }

  async edit(user: User): Promise<User> {
    await this.usersRepository.update(user.id, user)
    return user;
  }

  async remove(id: number): Promise<boolean> {
    // return await this.usersRepository.delete(id)
    return false
  }
}
