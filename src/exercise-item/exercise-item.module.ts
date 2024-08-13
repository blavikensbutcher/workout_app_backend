import { Module } from '@nestjs/common';
import { ExerciseItemService } from './exercise-item.service';
import { ExerciseItemController } from './exercise-item.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ExerciseItemController],
  providers: [ExerciseItemService, PrismaService],
})
export class ExerciseItemModule {}
