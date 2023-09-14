import { ArrayMinSize, IsBoolean, IsEmail, IsIn, IsInt, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { JobType } from "./constants/jobs.constants";
import { Type } from "class-transformer";


export class LocationDTO {
    @IsString()
    @IsNotEmpty()
    city: string;
  
    @IsString()
    @IsNotEmpty()
    country: string;
  }


export class CreateJobDTO{
    @IsString()
    @IsNotEmpty()
    companyName : string;

    @IsString()
    @IsNotEmpty()
    title : string;
    
    @IsEmail()
    email : string;

    @IsIn(Object.keys(JobType))
    @IsOptional()
    type?: JobType;

    @IsInt()
    @IsNotEmpty()
    experience : number;

    @IsNumber()
    salary: number;

    @IsString({each : true})
    @ArrayMinSize(1)
    tags?: number;
    
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;

    @ValidateNested()
    @IsObject()
    @Type(()=>LocationDTO)
    location: LocationDTO;
}