import {Controller, Get, Param} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {FindTaskDto} from "./dtos/findTask.dto";

@Controller('tasks')
export class TasksController {

  constructor(private taskService:TasksService) {
  }

  @Get(':id')
  async getTask(@Param() params: FindTaskDto) {
    return this.taskService.getTask(params.id);
  }

}
