import { IsEmail, IsString } from "class-validator";

export class userCreateDto{
    @IsString()
    name : string;

    @IsEmail()
     email : string;
};