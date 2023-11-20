import {IsString} from "@nestjs/class-validator";

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
