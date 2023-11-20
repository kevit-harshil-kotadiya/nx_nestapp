import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class TasksService {

  constructor(@InjectModel('Tasks') private Task:Model<any>) {
  }

  async getTask(id){
    try {
      const task = await this.Task.findById(id);
      if (task){
        return task;
      }
      else {
        return 'Task Not Found!'
      }
    }
    catch (e){
      throw new HttpException('Internal Server Error!',HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
