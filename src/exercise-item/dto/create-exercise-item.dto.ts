import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class CreateExerciseItemDto {
  @ApiProperty()
  @IsNumber()
  reps: number;

  @ApiProperty()
  @IsOptional()
  weight?: number;

  @ApiProperty()
  @IsNumber()
  timeInSecs: number;
}
