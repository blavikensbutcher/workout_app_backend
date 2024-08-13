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

  async findAllUsersExercises(userId: string): Promise<Exercise[]> {
    return this.prisma.exercise.findMany({
      where: {
        userId,
      },
    });
  }

  async findOneExerciseById(
    id: string,
    userId: string,
  ): Promise<Exercise | null> {
    return this.prisma.exercise.findUnique({
      where: {
        userId,
        id,
      },
    });
  }

  async updateOneExerciseById(
    id: string,
    userId: string,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    return this.prisma.exercise.update({
      where: {
        id,
        userId,
      },
      data: updateExerciseDto,
    });
  }

  async deleteExercise(id: string, userId: string) {
    return this.prisma.exercise.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
