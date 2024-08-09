import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExerciseModule } from './exercise/exercise.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ExerciseModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
