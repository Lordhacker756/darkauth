import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    login(@Body() user: {
        username: string,
        password: string,
    }) {
        return this.authService.loginUser(user)
    }

    @Post('/register')
    register(@Body() user: any) {
        return this.authService.registerUser(user)
    }

}
