import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAuthDto {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  otp: string;

  @Field(() => String)
  otptime: string;

  @Field(() => String)
  role: string;
}


export class LoginAuthDto {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}