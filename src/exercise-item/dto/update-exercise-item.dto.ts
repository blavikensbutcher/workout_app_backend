import { PartialType } from '@nestjs/swagger';
import { CreateExerciseItemDto } from './create-exercise-item.dto';
import { IsOptional } from 'class-validator';

//@TODO: updatedAt remove optional in prod

export class UpdateExerciseItemDto extends PartialType(CreateExerciseItemDto) {
  @IsOptional()
  updatedAt?: Date;

  @IsOptional()
  reps?: number | undefined;

  @IsOptional()
  weight?: number | undefined;

  @IsOptional()
  timeInSecs?: number | undefined;
}
