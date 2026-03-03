import { PartialType } from "@nestjs/graphql";
import { CreateAuthDto } from "./create-auth.dto";

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}