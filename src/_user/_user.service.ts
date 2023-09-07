import { Injectable } from '@nestjs/common';
import { userCreateDto } from './dto/user-create.dto';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User)
        private usersRepository : Repository<User>,
    ){}
    get(): Promise<User[]>{
        return this.usersRepository.find();
    }

    create(body :userCreateDto):Promise<any>{
        return this.usersRepository.save(body);
    }

    update(userDto: userCreateDto ,userId : number):Promise<any>{
        return this.usersRepository.update(userId,userDto);
    }

    show(userID : number):Promise<User | null>{
        return this.usersRepository.findOneBy({id : userID});
    }  

    delete(userId : number):Promise<any>{
        return this.usersRepository.delete(userId);
    }


}
