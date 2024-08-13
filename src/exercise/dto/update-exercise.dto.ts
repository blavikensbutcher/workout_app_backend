import { PartialType } from '@nestjs/swagger';
import { CreateExerciseDto } from './create-exercise.dto';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {
  exercise_name?: string | undefined;
  total_reps_one_month?: number;
  total_weight_one_month?: number;
  last_updated_at: Date;
  img: string;
  isWithWeight?: boolean | undefined;
}
