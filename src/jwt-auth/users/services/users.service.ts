import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UserDTO } from "../dto/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { hashSync } from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
     @InjectRepository(User)
     private readonly userRepository: Repository<User>
  ) {
  }

  public async create(createUserDTO: CreateUserDTO): Promise<UserDTO> {
    const newUser: CreateUserDTO = { ...createUserDTO, password: hashSync(createUserDTO.password, 10) };
    return this.userRepository.save(newUser);
  }

  public async findAll(): Promise<UserDTO[]> {
    return this.userRepository.find();
  }

  public async findByUsername(username: string): Promise<UserDTO> {
    return this.userRepository.findOne({ where: { username } });
  }

  public async deleteById(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  public async deleteAll(): Promise<void> {
    await this.userRepository.clear();
  }
}
