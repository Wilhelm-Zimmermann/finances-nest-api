import { Request } from "express";
import { User } from "src/users/models/User";

export class AuthRequest extends Request {
  user: User;
}
