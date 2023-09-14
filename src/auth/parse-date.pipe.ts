import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { throwError } from "rxjs";

@Injectable()
export class ParseDatePipe implements PipeTransform{
    transform(value: number | string , metadata: ArgumentMetadata) {
        console.log(metadata)
        const date = this.convertTimestamp(value);

        if(!date || isNaN(+date)){
            throw new BadRequestException("Invalid date");
        }
        const {metatype} = metadata;

        switch (metatype){
         case String:
         return date.toUTCString();

         case Date: 
            return date;

            case Number:
                return date.getTime();

                default:
                    return date.toISOString();

        }

        return date;

    }

    private convertTimestamp(timestamp: string | number){
        timestamp = +timestamp;
        const isSecond = !(timestamp > (Date.now() + 24 * 60 * 60 * 1000)/1000);

        return isSecond ? new Date(timestamp * 1000) : new Date(timestamp);
    }
} 