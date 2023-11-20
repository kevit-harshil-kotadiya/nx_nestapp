import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {MongooseModule} from "@nestjs/mongoose";
import {taskSchema} from "../tasks/task.model";

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Tasks', schema: taskSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {

}
