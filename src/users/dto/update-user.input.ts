import { CreateUserInput } from './create-user.input';
import {
  InputType,
  Field,
  PartialType,
  GraphQLISODateTime,
} from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  lastName: string;

  @Field(() => String, { nullable: true })
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
