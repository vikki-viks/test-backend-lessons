import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from 'src/entity/user.entity';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { hashPassword } from 'src/auth/crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getList() {
    return await this.usersRepository.find({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async createUser({ name, email, password }: UserDto) {
    const hashedPassword = await hashPassword(password);
    const newUser = await this.usersRepository.insert({
      name,
      email,
      password: hashedPassword,
    });
    const id = newUser.identifiers[0].id;
    return { id, name, email };
  }

  async findOne({ name }: AuthDto) {
    return await this.usersRepository.findOne({ where: { name } });
  }
}
