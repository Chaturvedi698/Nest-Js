import { Body, Controller, DefaultValuePipe, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ParseDatePipe } from './parse-date.pipe';

@Controller()
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('signup/:id')
    signup(@Param("id",new DefaultValuePipe(2), ParseIntPipe) id,@Body("timestamp",ParseDatePipe) date:boolean){
        // return this.authService.signin();
        return {date};
    }

    @Post('signout')
    signin(){
        return this.authService.signout();
    }
}
 