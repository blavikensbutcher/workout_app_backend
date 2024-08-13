import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExerciseItemService } from './exercise-item.service';
import { CreateExerciseItemDto } from './dto/create-exercise-item.dto';
import { UpdateExerciseItemDto } from './dto/update-exercise-item.dto';

@Controller('exercise-item')
export class ExerciseItemController {
  constructor(private readonly exerciseItemService: ExerciseItemService) {}

  @Post()
  create(@Body() createExerciseItemDto: CreateExerciseItemDto) {
    return this.exerciseItemService.create(createExerciseItemDto);
  }

  @Get('u/:exerciseId')
  findAllExerciseItems(@Param('exerciseId') execiseId: string) {
    return this.exerciseItemService.findAllExerciseItems(execiseId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.exerciseItemService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateExerciseItemDto: UpdateExerciseItemDto) {
  //   return this.exerciseItemService.update(+id, updateExerciseItemDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.exerciseItemService.remove(+id);
  // }
}
