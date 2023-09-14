import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDTO } from './create-job.dto';
import { JoiValidationPipe } from './joi-validation.pipe';
import { createJobSchema } from './create-job.schema';

@Controller('jobs')
export class JobsController {
     constructor(private readonly jobsService : JobsService){}




   //   Schema based validation
   //   @Post()
   //   @UsePipes(new JoiValidationPipe(createJobSchema))
   //   createJob(@Body() createJobDto : CreateJobDTO){
   //      console.log(createJobDto)
   //      return this.jobsService.createJob(createJobDto)

   //   }


   // Class Based validation


   // new ValidationPipe({
   //    transform : true, // for making the transfom of upcoming value according to the coustom type
   //    dismissDefaultMessages : true, // if we want to send coustom error message then we set a dismissDefaultMessages : true
   //    disableErrorMessages : true, // if we want to set a no error message then we set a true else we set a false
   //    whitelist : true , // if we want only the data which is based on the dto then we use whitelist true
   //    skipMissingProperties : true, // if we skip the missing properties and don't want to set them a null by defualt then we use this property
   //    stopAtFirstError : true, // this property stop us at the first message and not go for more errors, until and unless we resolve this error

   // })

   @Post()
   @UsePipes(ValidationPipe)
   createJob(@Body(ValidationPipe) createJobDto : CreateJobDTO){
      return this.jobsService.createJob(createJobDto)
   }






}


