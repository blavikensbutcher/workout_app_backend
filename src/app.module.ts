import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [UsersModule, ExercisesModule],
})
export class AppModule {}
