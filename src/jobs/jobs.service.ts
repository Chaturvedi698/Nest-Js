import { Injectable } from '@nestjs/common';
import { CreateJobDTO } from './create-job.dto';
@Injectable()
export class JobsService {

    createJob(createJobDto : CreateJobDTO){
        console.log(createJobDto)
        return createJobDto;
    }
}
