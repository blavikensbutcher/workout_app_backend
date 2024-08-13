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
import { UpdateExerciseDto } from './dto/update-exercise.dto';

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
    return this.exerciseService.findAllUsersExercises(userId);
  }

  @Auth()
  @Get('e/:id')
  findOneExercise(@Param('id') id: string, @CurrentUser('id') userId: string) {
    return this.exerciseService.findOneExerciseById(id, userId);
  }

  @Auth()
  @Patch('e/:id')
  updateExercise(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
    @Body() dto: UpdateExerciseDto,
  ) {
    return this.exerciseService.updateOneExerciseById(id, userId, dto);
  }

  @Auth()
  @Delete('e/:id')
  deleteExercise(@Param('id') id: string, @CurrentUser('id') userId: string) {

    return this.exerciseService.deleteExercise(id, userId);
  }
}
