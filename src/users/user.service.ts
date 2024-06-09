import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./models/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { hash } from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = new User();
    const passwordHash = await hash(createUserDto.password, 8);

    user.name = createUserDto.name;
    user.lastName = createUserDto.lastName;
    user.username = createUserDto.username;
    user.password = passwordHash;

    await this.usersRepository.save(user);
  }

  async getUserByUserName(username: string) {
    return await this.usersRepository.findOne({
      where: {
        username,
      },
    });
  }
}
