import { Injectable } from '@nestjs/common';
import { CreateExerciseItemDto } from './dto/create-exercise-item.dto';
import { UpdateExerciseItemDto } from './dto/update-exercise-item.dto';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ExerciseItemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExerciseItemDto: CreateExerciseItemDto) {
    return 'This action adds a new exerciseItem';
  }

  async findAllExerciseItems(exerciseId: string) {
    return this.prisma.exerciseListItem.findMany({
      where: {
        exerciseId,
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} exerciseItem`;
  // }

  // update(id: number, updateExerciseItemDto: UpdateExerciseItemDto) {
  //   return `This action updates a #${id} exerciseItem`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} exerciseItem`;
  // }
}
