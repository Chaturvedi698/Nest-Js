import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from "./_user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./_user/entity/user.entity";

@Module({
    controllers : [AppController],
    imports : [UserModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'NestJs',
            entities: [User],
            synchronize: true,
          }),
        ]
})
export class AppModule{}