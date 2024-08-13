import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaService } from 'src/prisma.service';
import { Exercise } from '@prisma/client';
import { response } from 'express';
import { STATUS_CODES } from 'http';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

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

  async findOneExerciseById(id: string, userId: string) {
    try {
      const exercise = await this.prisma.exercise.findUnique({
        where: {
          userId,
          id,
        },
      });

      if (!exercise) throw new NotFoundException('Exerise doesn`t exists');

      return exercise;
    } catch (e) {
      if (e instanceof NotFoundException) {
        throw e;
      } else {
        throw new InternalServerErrorException(
          'An error occurred while trying to find the exercise',
        );
      }
    }
  }

  async updateOneExerciseById(
    id: string,
    userId: string,
    updateExerciseDto: UpdateExerciseDto,
  ) {
    try {
      return await this.prisma.exercise.update({
        where: {
          id,
          userId,
        },
        data: updateExerciseDto,
      });
    } catch (e) {
      return { error: e.meta.cause };
    }
  }

  async deleteExercise(id: string, userId: string) {
    try {
      await this.prisma.exercise.delete({
        where: {
          id,
          userId,
        },
      });

      return { success: 'Successfully deleted' };
    } catch (e) {
      return { error: e.meta.cause };
    }
  }
}