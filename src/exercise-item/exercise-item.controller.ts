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

  @Post('u/:exerciseId')
  createExerciseItem(
    @Body() dto: CreateExerciseItemDto,
    @Param('exerciseId') exerciseId: string,
  ) {
    return this.exerciseItemService.createExerciseItem(dto, exerciseId);
  }

  @Get('u/:exerciseId')
  findAllExerciseItems(@Param('exerciseId') exerciseId: string) {
    return this.exerciseItemService.findAllExerciseItems(exerciseId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.exerciseItemService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateExerciseItemDto: UpdateExerciseItemDto) {
  //   return this.exerciseItemService.update(+id, updateExerciseItemDto);
  // }

  @Delete('delete/:exerciseItemId')
  deleteExerciseItem(@Param('exerciseItemId') exerciseItemId: string) {
    return this.exerciseItemService.deleteExerciseItem(exerciseItemId);
  }
}
