import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "../users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import {TasksModule} from "../tasks/tasks.module";

@Module({
  imports: [UsersModule,TasksModule,  MongooseModule.forRoot('mongodb://localhost:27017/nxtutorial')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
