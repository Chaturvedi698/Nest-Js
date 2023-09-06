import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
    get(){
        return {name : "Rohit Chaturvedi" , email : "rohitchaturvedi698@gmail.com"};
    }

    create(req : Request){
        return req.body;
    }

    update(req: Request, param : {userId : number}){
        return {body : req.body , param};
    }

    show(param : {userId : number}){
        return param;
    }  

    delete(param : {userId : number}){
        return param;
    }


}
