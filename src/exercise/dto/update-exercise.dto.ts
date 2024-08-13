import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateExerciseDto } from './create-exercise.dto';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {
  @ApiProperty()
  @IsString()
  @IsOptional()
  exercise_name?: string | undefined;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  total_reps_one_month?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  total_weight_one_month?: number;

  @ApiProperty()
  last_updated_at: Date;

  @IsString()
  @IsOptional()
  @ApiProperty()
  img?: string | undefined;

  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  isWithWeight?: boolean | undefined;
}
