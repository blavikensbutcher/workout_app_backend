import { Injectable } from '@nestjs/common';
import { CreateExerciseItemDto } from './dto/create-exercise-item.dto';
import { UpdateExerciseItemDto } from './dto/update-exercise-item.dto';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ExerciseItemService {
  constructor(private readonly prisma: PrismaService) {}

  async createExerciseItem(dto: CreateExerciseItemDto, exerciseId: string) {
    return this.prisma.exerciseListItem.create({
      data: {
        ...dto,
        exercise: {
          connect: {
            id: exerciseId,
          },
        },
      },
    });
  }

  async findAllExerciseItems(exerciseId: string) {
    const exercise = await this.prisma.exerciseListItem.findMany({
      where: {
        exerciseId,
      },
    });

    return exercise;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} exerciseItem`;
  // }

  // update(id: number, updateExerciseItemDto: UpdateExerciseItemDto) {
  //   return `This action updates a #${id} exerciseItem`;
  // }

  async deleteExerciseItem(exerciseItemId: string) {
    return this.prisma.exerciseListItem.delete({
      where: {
        id: exerciseItemId,
      },
    });
  }
}
