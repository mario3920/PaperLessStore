import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/utils/functions';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try{
      const { name, email } = createUserDto
      const cryptedPassword = await hashPassword(createUserDto.password);
      this.userRepository.save({name: name, email: email, password: cryptedPassword, purchases: [], role: 'client'})
      return { message: 'User created successfully' }
    }catch(err){
      throw new Error(err)
    }
  }

  async findAll() {
    try{
      return await this.userRepository.find()
    }catch(err){
      throw new Error(err)
    }
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({where: {id:id}})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // return await this.userRepository.update()
  }
}
