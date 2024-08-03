import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType({ description: 'Create user schema' })
export class CreateUserInput {
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  lastName: string;

  password: string;

  @Field(() => String, { nullable: true })
  avatar: string;

  @Field(() => Boolean, { nullable: true })
  isVerified: boolean;

  @Field(() => String, { nullable: true })
  accessToken: string;

  @Field(() => String, { nullable: true })
  refreshToken: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  createdAt: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt: string;
}
