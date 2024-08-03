import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInputError } from '@nestjs/apollo';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const user = this.userRepository.create(createUserInput);
    return this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findUserById(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) throw new UserInputError(`User not found`);

    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const user = await this.userRepository.preload({
      id,
      ...updateUserInput,
    });

    if (!user) throw new UserInputError('User doesnt exists');

    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) throw new UserInputError('User doesnt exists');

    await this.userRepository.delete(user);

    return user;
  }
}
