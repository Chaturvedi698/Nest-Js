import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    signin(){
        return {msg : 'I am signed up'};
    }

    signout(){
        return {msg : 'I am signed out'};
    }
}
