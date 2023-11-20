import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateTaskDto} from "./dtos/createTask.dto";

@Controller('users')
export class UsersController {

  constructor(private userService:UsersService) {
  }

  @Post('task')
  async createTask(@Body() body :CreateTaskDto){
    return this.userService.createTask(body);
  }


}
