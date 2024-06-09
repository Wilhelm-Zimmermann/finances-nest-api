import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { compare } from "bcrypt";
import { User } from "src/users/models/User";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  login() {
    return "ola";
  }

  async validateUser(username: string, password: string) {
    const user = await this.usersRepository.findOne({
      where: {
        username,
      },
    });

    return await compare(password, user.password);
  }
}
