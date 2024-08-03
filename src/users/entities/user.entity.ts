import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
@ObjectType({ description: 'User model' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Unique id' })
  id: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  lastName?: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  avatar?: string;

  @Column({ default: false })
  @Field(() => Boolean, { defaultValue: false })
  isVerified: boolean;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @CreateDateColumn({ nullable: true })
  @Field(() => GraphQLISODateTime, { nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt: Date;

  // @Column({type: 'json'})
  // userParams: userParams[];
}
