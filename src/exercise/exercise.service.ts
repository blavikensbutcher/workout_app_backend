import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaService } from 'src/prisma.service';
import { Exercise } from '@prisma/client';

@Injectable()
export class ExerciseService {
  constructor(private readonly prisma: PrismaService) {}

  async createExercise(
    createExerciseDto: CreateExerciseDto,
    userId: string,
  ): Promise<Exercise> {
    return this.prisma.exercise.create({
      data: {
        ...createExerciseDto,
        user: { connect: { id: userId } },
      },
    });
  }

  findAllExercisesByUserId(userId: string) {
    return this.prisma.exercise.findMany({
      where: {
        userId,
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} exercise`;
  // }

  // update(id: number, updateExerciseDto: UpdateExerciseDto) {
  //   return `This action updates a #${id} exercise`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} exercise`;
  // }
}
