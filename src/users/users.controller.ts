import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string }): Promise<string> {
    await this.usersService.createUser(body.username, body.password);
    return 'User registered successfully!';
  }
}
