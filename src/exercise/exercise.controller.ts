import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'decorators/user.decorator';
import { Auth } from 'decorators/auth.decorator';

@Controller('exercise')
@ApiTags('Exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Auth()
  @Post()
  create(@Body() dto: CreateExerciseDto, @CurrentUser('id') userId: string) {
    return this.exerciseService.createExercise(dto, userId);
  }

  @Auth()
  @Get()
  findAll(@CurrentUser('id') userId: string) {
    return this.exerciseService.findAllExercisesByUserId(userId);
  }
}
