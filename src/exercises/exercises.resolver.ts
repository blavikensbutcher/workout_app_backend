import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExercisesService } from './exercises.service';
import { CreateExerciseInput } from './dto/create-exercise.input';
import { UpdateExerciseInput } from './dto/update-exercise.input';

@Resolver('Exercise')
export class ExercisesResolver {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Mutation('createExercise')
  create(@Args('createExerciseInput') createExerciseInput: CreateExerciseInput) {
    return this.exercisesService.create(createExerciseInput);
  }

  @Query('exercises')
  findAll() {
    return this.exercisesService.findAll();
  }

  @Query('exercise')
  findOne(@Args('id') id: number) {
    return this.exercisesService.findOne(id);
  }

  @Mutation('updateExercise')
  update(@Args('updateExerciseInput') updateExerciseInput: UpdateExerciseInput) {
    return this.exercisesService.update(updateExerciseInput.id, updateExerciseInput);
  }

  @Mutation('removeExercise')
  remove(@Args('id') id: number) {
    return this.exercisesService.remove(id);
  }
}
