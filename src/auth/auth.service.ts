import { Injectable } from "@nestjs/common";
import { compare } from "bcrypt";
import { User } from "src/users/models/User";
import { UserService } from "src/users/user.service";
import { UserPayload } from "./types/UserPayload";
import { JwtService } from "@nestjs/jwt";
import { UserToken } from "./types/UserToken";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: User): UserToken {
    // Transform user into jwt
    const payload: UserPayload = {
      sub: user.id,
      username: user.username,
      name: user.name,
      lastName: user.lastName,
    };

    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
    };
  }

  async validateUser(username: string, password: string) {
    const user = await this.userService.getUserByUserName(username);

    if (user) {
      const passwordMatch = await compare(password, user.password);

      if (passwordMatch) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error("Username/Password might be invalid");
  }
}
