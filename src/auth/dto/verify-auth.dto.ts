import { Field } from "@nestjs/graphql";

export class VerifyAuthDto {
  @Field(() => String)
  email: string;

  @Field(() => String)
  otp: string;
}
