import { Controller ,Get,Put,Post,Delete,Param, Req, Patch} from "@nestjs/common";
import { UserService } from "./_user.service";
import { Request } from "express";

@Controller('/user')
export class UserController{
    constructor(private userservice : UserService){}
    @Get()
    getusers(){
        return this.userservice.get();
    }
    @Get('/:id')
    getuser(@Param() param : {userId : number}){
        return this.userservice.show(param)    
    }

    @Post()
    store(@Req() req : Request){
        return this.userservice.create(req)
    }

    @Patch('/:id')
    putting(@Req() req : Request , @Param() param : {userId: number}){
        return this.userservice.update(req,param);
    }

    @Delete('/:id')
    deleting(@Param() param :{userId : number}){
        return this.userservice.delete(param);
    }
}