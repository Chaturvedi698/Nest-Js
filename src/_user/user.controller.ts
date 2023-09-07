import { Controller ,Get,Put,Post,Delete,Param, Req, Patch, Body, ParseIntPipe} from "@nestjs/common";
import { UserService } from "./_user.service";
import { userCreateDto } from "./dto/user-create.dto";

@Controller('/user')
export class UserController{
    constructor(private userservice : UserService){}
    @Get()
    getusers(){
        return this.userservice.get();
    }
    @Get('/:id')
    getuser(@Param('id',ParseIntPipe) id : number){
        return this.userservice.show(id)    
    }

    @Post()
    createuser(@Body() body:userCreateDto){
        return this.userservice.create(body)
    }

    @Patch('/:id')
    update(@Body() userDto : userCreateDto, @Param('id',ParseIntPipe) id: number){
        return this.userservice.update(userDto,id);
    }
    
        @Delete('/:id')
        delete(@Param('id', ParseIntPipe) id : number){
            return this.userservice.delete(id);
        }
}