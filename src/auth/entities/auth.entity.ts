import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "auth"})
@ObjectType()
export class Auth {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Number)
  password: number;

  @Field(() => String)
  otp: string;

  @Field(() => String)
  otptime: string;

  @Field()
  role: string;
}   