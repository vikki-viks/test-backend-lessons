import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLoginResponse } from './api/create-login-response';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    description: 'Получение токена для входа',
  })
  @ApiResponse({
    status: 200,
    type: CreateLoginResponse,
  })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() authDto: AuthDto): Promise<CreateLoginResponse> {
    return this.authService.signIn(authDto);
  }
}
