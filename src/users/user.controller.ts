import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserResponse } from './api/create-user-response';
import { GetUserResponse } from './api/get-user-response';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('users')
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ description: 'Получение списка пользователей' })
  @ApiResponse({
    status: 200,
    type: [GetUserResponse],
  })
  @UseGuards(AuthGuard)
  @Get()
  async getList(): Promise<GetUserResponse[]> {
    return await this.userService.getList();
  }

  @ApiOperation({ description: 'Создание пользователя' })
  @ApiResponse({
    status: 201,
    type: CreateUserResponse,
  })
  @Post()
  async create(@Body() userDto: UserDto): Promise<CreateUserResponse> {
    return await this.userService.createUser(userDto);
  }
}
