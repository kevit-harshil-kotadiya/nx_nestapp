import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class UsersService {

  constructor(@InjectModel('Tasks') private readonly Task:Model<any>) {
  }

  async createTask(body){
    try {
      const task = new this.Task(body);
      const result = await task.save();
      if (result){
        return 'Task saved';
      }
      else{
        throw new HttpException("Error Saving Task",HttpStatus.INTERNAL_SERVER_ERROR)
      }
    }
    catch (e){
      console.log(e);
      throw new HttpException("Error Saving Task",HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }



}
