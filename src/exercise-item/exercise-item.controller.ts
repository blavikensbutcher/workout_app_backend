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
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'decorators/auth.decorator';

@Controller('exercise-item')
@ApiTags('Exercise Items')
export class ExerciseItemController {
  constructor(private readonly exerciseItemService: ExerciseItemService) {}

  @Auth()
  @Post('u/:exerciseId')
  createExerciseItem(
    @Body() dto: CreateExerciseItemDto,
    @Param('exerciseId') exerciseId: string,
  ) {
    return this.exerciseItemService.createExerciseItem(dto, exerciseId);
  }

  @Auth()
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
