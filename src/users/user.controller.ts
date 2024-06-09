import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/CreateUser.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.usersService.createUser(createUserDto);
  }

  @Get("/username/:username")
  async getUserByUserName(@Param("username") username: string) {
    return await this.usersService.getUserByUserName(username);
  }
}
