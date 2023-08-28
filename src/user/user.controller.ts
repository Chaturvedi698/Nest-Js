import { Controller ,Get,Put,Post,Delete,Param} from "@nestjs/common";

@Controller('/user')
export class UserController{
    @Get()
    getusers(){
        return 'I am from the use controller'
    }
    @Get('/:id')
    getuser(@Param() userid : number){
        return userid
    }

    @Post()
    store(){
        return 'I  am post'
    }

    @Put()
    putting(){
        return 'I am put'
    }

    @Delete()
    deleting(){
        return 'I am delete'
    }

}