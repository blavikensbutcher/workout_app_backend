import { CreateExerciseInput } from './create-exercise.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateExerciseInput extends PartialType(CreateExerciseInput) {
  id: number;
}
