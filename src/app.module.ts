import { Module, ValidationPipe } from '@nestjs/common';
import { Authmodule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import {APP_PIPE, RouterModule} from '@nestjs/core'
import { JobsController } from './jobs/jobs.controller';
import { JobsService } from './jobs/jobs.service';

@Module({
  imports: [Authmodule, UserModule, BookmarkModule,RouterModule.register([{path : 'auth', module : Authmodule}])],
  controllers: [JobsController],
  providers: [JobsService, {provide : APP_PIPE, useClass : ValidationPipe}]  // here we  declare this pipevalidation in the application context
})
export class AppModule {}


