export interface UserPayload {
  sub?: string;
  username: string;
  name: string;
  lastName: string;
  iat?: number;
  exp?: number;
}
